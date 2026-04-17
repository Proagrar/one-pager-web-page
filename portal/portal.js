import { supabase } from './data.js';
import { loadSession, logout } from './auth.js';

// ── Bootstrap: read customer id from URL hash ──────────────────────────────
const customerId = decodeURIComponent(location.hash.slice(1));

if (!customerId) {
  location.href = 'index.html';
} else {
  init(customerId);
}

// ── Helpers ────────────────────────────────────────────────────────────────

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Dobro jutro';
  if (h < 18) return 'Dober dan';
  return 'Dober večer';
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(iso) {
  if (!iso) return '—';
  // Slice date part only to avoid timezone shift from UTC midnight
  const [y, m, d] = iso.slice(0, 10).split('-');
  return `${parseInt(d, 10)} ${MONTHS[parseInt(m, 10) - 1]} ${y}`;
}

function showError(msg) {
  const el = document.getElementById('dashboard-error');
  if (el) { el.textContent = msg; el.classList.add('visible'); }
}

// ── Init ───────────────────────────────────────────────────────────────────

async function init(customerId) {
  // Verify session is still valid
  const customer = await loadSession(customerId);
  if (!customer) {
    location.href = 'index.html';
    return;
  }

  // Fetch all data in parallel
  // TODO: replace with API calls to /api/customer/:id/reports, /fields, /orders
  const [reportsRes, fieldsRes, ordersRes] = await Promise.all([
    supabase
      .from('reports')
      .select('id, title, year, report_date, file_path, url_kalkulacija')
      .eq('customer_id', customerId)
      .order('report_date', { ascending: false }),

    supabase
      .from('fields')
      .select('id, name, area_ha')
      .eq('customer_id', customerId),

    supabase
      .from('orders')
      .select('*')
      .eq('customer_id', customerId)
      .order('service_date', { ascending: false }),
  ]);

  if (reportsRes.error || fieldsRes.error || ordersRes.error) {
    showError('Napaka pri nalaganju podatkov. Prosimo, osvežite stran.');
    return;
  }

  render(customer, reportsRes.data || [], fieldsRes.data || [], ordersRes.data || []);
}

// ── Render ─────────────────────────────────────────────────────────────────

function render(customer, reports, fields, orders) {
  const firstName = (customer.contact_name || customer.company_name).split(' ')[0];

  // Greeting & nav
  document.getElementById('greeting-text').textContent = `${greeting()}, ${firstName}`;
  document.getElementById('customer-name').textContent =
    customer.contact_name || customer.company_name;

  // Sign-out
  document.getElementById('btn-signout').addEventListener('click', () => {
    logout();
    location.href = 'index.html';
  });

  // Summary cards
  const totalHa     = fields.reduce((sum, f) => sum + parseFloat(f.area_ha || 0), 0);
  const plannedCount = orders.filter(o =>
    o.status !== 'completed' && o.status !== 'cancelled'
  ).length;

  document.getElementById('stat-reports').textContent = reports.length;
  document.getElementById('stat-ha').textContent      = totalHa.toFixed(1);
  document.getElementById('stat-fields').textContent  = fields.length;
  document.getElementById('stat-planned').textContent = plannedCount;

  // Reports table
  // TODO: replace with API call to /api/customer/:id/reports
  const reportsBody = document.getElementById('reports-body');
  if (reports.length === 0) {
    reportsBody.innerHTML = '<tr><td colspan="5" class="empty-row">Ni poročil.</td></tr>';
  } else {
    reports.forEach(r => {
      const tr = document.createElement('tr');
      const pdfLink = r.file_path
        ? `<a class="download-link" href="${r.file_path}" target="_blank" rel="noopener">&#8659; Odpri</a>`
        : '—';
      const calcLink = r.url_kalkulacija
        ? `<a class="download-link" href="${r.url_kalkulacija}" target="_blank" rel="noopener">&#8659; Odpri</a>`
        : '—';
      tr.innerHTML = `
        <td>${r.title || '—'}</td>
        <td>${r.year || '—'}</td>
        <td>${formatDate(r.report_date)}</td>
        <td>${pdfLink}</td>
        <td>${calcLink}</td>
      `;
      reportsBody.appendChild(tr);
    });
  }

  // Orders table (mapped to "Akcije na polju")
  // TODO: replace with API call to /api/customer/:id/orders
  const actionsBody = document.getElementById('actions-body');
  if (orders.length === 0) {
    actionsBody.innerHTML = '<tr><td colspan="5" class="empty-row">Ni akcij.</td></tr>';
  } else {
    orders.forEach(o => {
      const tr = document.createElement('tr');
      const isCompleted = o.status === 'completed';
      const badge = isCompleted
        ? '<span class="status-badge status-completed">Opravljeno</span>'
        : '<span class="status-badge status-planned">Načrtovano</span>';
      tr.innerHTML = `
        <td>${o.service_type || o.order_number || '—'}</td>
        <td>—</td>
        <td>—</td>
        <td>${formatDate(o.service_date || o.order_date)}</td>
        <td>${badge}</td>
      `;
      actionsBody.appendChild(tr);
    });
  }
}
