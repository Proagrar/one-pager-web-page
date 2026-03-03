import { loadSession, logout, getCurrentCustomer } from './auth.js';

// ── Bootstrap: read session from URL hash ──────────────────────────────────
const email = decodeURIComponent(location.hash.slice(1));

if (!email || !loadSession(email)) {
  location.href = 'index.html';
} else {
  render(getCurrentCustomer());
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
  const [y, m, d] = iso.split('-');
  return `${parseInt(d, 10)} ${MONTHS[parseInt(m, 10) - 1]} ${y}`;
}

// ── Render ─────────────────────────────────────────────────────────────────

function render(customer) {
  const firstName = customer.name.split(' ')[0];

  // Greeting
  document.getElementById('greeting-text').textContent =
    `${greeting()}, ${firstName}`;

  // Customer name in nav
  document.getElementById('customer-name').textContent = customer.name;

  // Sign-out
  document.getElementById('btn-signout').addEventListener('click', () => {
    logout();
    location.href = 'index.html';
  });

  // Summary cards
  // TODO: replace with API call to /api/customer/:id/summary
  const completedActions = customer.actions.filter(a => a.type === 'completed');
  const plannedActions   = customer.actions.filter(a => a.type === 'planned');
  const totalHa = customer.actions.reduce((sum, a) => sum + a.ha, 0);
  const fieldCount = new Set(customer.actions.map(a => a.field)).size;

  document.getElementById('stat-reports').textContent  = customer.reports.length;
  document.getElementById('stat-ha').textContent       = totalHa.toFixed(1);
  document.getElementById('stat-fields').textContent   = fieldCount;
  document.getElementById('stat-planned').textContent  = plannedActions.length;

  // Reports table
  // TODO: replace with API call to /api/customer/:id/reports
  const reportsBody = document.getElementById('reports-body');
  customer.reports.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${r.title}</td>
      <td>${formatDate(r.date)}</td>
      <td>${r.category}</td>
      <td><a class="download-link" href="${r.url}" target="_blank" rel="noopener">&#8659; Prenesi</a></td>
    `;
    reportsBody.appendChild(tr);
  });

  // Actions table
  // TODO: replace with API call to /api/customer/:id/actions
  const actionsBody = document.getElementById('actions-body');
  customer.actions.forEach(a => {
    const tr = document.createElement('tr');
    const badge = a.type === 'completed'
      ? '<span class="status-badge status-completed">Opravljeno</span>'
      : '<span class="status-badge status-planned">Načrtovano</span>';
    tr.innerHTML = `
      <td>${a.action}</td>
      <td>${a.field}</td>
      <td>${a.ha} ha</td>
      <td>${formatDate(a.date)}</td>
      <td>${badge}</td>
    `;
    actionsBody.appendChild(tr);
  });
}
