// Lead form (GitHub Pages safe): POST to endpoint if provided, otherwise mailto fallback
(function () {
  const form = document.getElementById("leadForm");
  if (!form) return;

  const statusEl = document.getElementById("formStatus");

  function setStatus(msg, isError) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.classList.toggle("is-error", !!isError);
    statusEl.classList.toggle("is-success", !isError);
  }

  function val(id) {
    const el = document.getElementById(id);
    return el ? (el.value || "").trim() : "";
  }

  function buildPayload() {
    return {
      ime: val("ime"),
      priimek: val("priimek"),
      email: val("email"),
      telefon: val("telefon"),
      naslov: val("naslov"),
      regija: val("regija"),
      mid: val("mid"),
      dejavnost: val("dejavnost"),
      hektarji: val("hektarji"),
      storitev: val("storitev"),
      vir: val("vir"),
      sporocilo: val("sporocilo"),
      source: window.location.href,
      ts: new Date().toISOString()
    };
  }

  function validate(payload) {
    const errors = [];
    if (!payload.ime) errors.push("Vnesite ime.");
    if (!payload.priimek) errors.push("Vnesite priimek.");
    if (!payload.sporocilo) errors.push("Vnesite vprašanje/sporočilo.");

    const hasEmail = !!payload.email;
    const hasPhone = !!payload.telefon;
    if (!hasEmail && !hasPhone) errors.push("Vnesite vsaj e-pošto ali telefonsko številko.");

    if (payload.email) {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
      if (!ok) errors.push("E-pošta ni v pravilni obliki.");
    }

    return errors;
  }

  function mailtoFallback(payload) {
    const subject = encodeURIComponent("Povpraševanje – Proagrar (spletna stran)");
    const lines = [
      "Novo povpraševanje:",
      "",
      `Ime: ${payload.ime}`,
      `Priimek: ${payload.priimek}`,
      `E-pošta: ${payload.email || "-"}`,
      `Telefon: ${payload.telefon || "-"}`,
      `Naslov: ${payload.naslov || "-"}`,
      `Regija: ${payload.regija || "-"}`,
      `MID: ${payload.mid || "-"}`,
      `Dejavnost: ${payload.dejavnost || "-"}`,
      `Število ha: ${payload.hektarji || "-"}`,
      `Storitev: ${payload.storitev || "-"}`,
      `Vir: ${payload.vir || "-"}`,
      "",
      "Sporočilo:",
      payload.sporocilo,
      "",
      `Stran: ${payload.source}`,
      `Čas: ${payload.ts}`
    ];
    const body = encodeURIComponent(lines.join("\n"));
    const to = (window.PROAGRAR_CONTACT_EMAIL || "info@proagrar.example");
    window.location.href = `mailto:${encodeURIComponent(to)}?subject=${subject}&body=${body}`;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("");

    const payload = buildPayload();
    const errors = validate(payload);
    if (errors.length) {
      setStatus(errors.join(" "), true);
      return;
    }

    const endpoint = (form.getAttribute("data-endpoint") || "").trim();

    // If no endpoint configured, fallback to mailto
    if (!endpoint) {
      setStatus("Odpiram e-pošto za pošiljanje povpraševanja …");
      mailtoFallback(payload);
      return;
    }

    try {
      setStatus("Pošiljam povpraševanje …");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Bad response");
      setStatus("Hvala. Povpraševanje je poslano.", false);
      form.reset();
    } catch (err) {
      // If fetch fails (CORS, downtime), fallback to mailto
      setStatus("Pošiljanje prek povezave ni uspelo. Odpiram e-pošto …", true);
      mailtoFallback(payload);
    }
  });
})();
// Reveal on scroll
(() => {
  const els = document.querySelectorAll("[data-animate]");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
})();

// Mobile navigation toggle
(() => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  function closeNav() {
    btn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  // Close after selecting a link (mobile)
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    closeNav();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
})();

// Topcards: reveal details on click for a cleaner default view
(() => {
  const cards = Array.from(document.querySelectorAll('[data-topcard]'));
  if (!cards.length) return;

  function setOpen(card, open) {
    const btn = card.querySelector('[data-topcard-toggle]');
    const panel = card.querySelector('[data-topcard-panel]');
    if (!btn || !panel) return;
    card.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  }

  cards.forEach((card) => {
    const btn = card.querySelector('[data-topcard-toggle]');
    const panel = card.querySelector('[data-topcard-panel]');
    if (!btn || !panel) return;

    // Ensure consistent initial state
    btn.setAttribute('aria-expanded', 'false');
    panel.hidden = true;

    btn.addEventListener('click', () => {
      const isOpen = card.classList.contains('is-open');
      // accordion behaviour: only one open
      cards.forEach((c) => setOpen(c, false));
      setOpen(card, !isOpen);
    });
  });
})();
