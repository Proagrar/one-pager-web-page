# CLAUDE.md — Proagrar Customer Portal

## Project context
We are building a **customer portal** as a completely separate mini-site within the same repo.
Customers log in and see their personal farming service data: PDF reports, completed field actions, and planned work.

**The portal is fully self-contained.** It does not import, link, or depend on any files from the main site.
No shared CSS, no shared JS, no shared assets — copy what you need, don't reference it.

---

## Design — match the existing page visually, but copy don't import

Before writing any portal code, read the existing site files (likely `index.html` and any linked `.css` files in the repo root or `/css/`).

Extract and hard-copy these values directly into `/portal/style.css`:
- All CSS custom properties / variables (colors, spacing, radius, shadows)
- Font families and the Google Fonts `@import` or `<link>` URL
- Button styles, form input styles, card/panel patterns
- Any recurring utility classes (e.g. `.container`, `.btn`, `.section-title`)

Once extracted, the portal must look like it belongs to the same brand as the main site — same fonts, same color palette, same component feel — but achieved through duplicated, standalone CSS only.

---

## Stack & constraints
- **HTML + CSS + Vanilla JavaScript only** — no frameworks, no build step, no npm
- No backend yet — mock data in `data.js`, structured to be swapped for real API calls later
- PDF reports are static file links for now
- No localStorage or sessionStorage — session state in JS memory only
- All portal files live exclusively in `/portal/` — nothing outside that folder

---

## Folder structure to create
```
/portal/
  index.html      ← login page
  dashboard.html  ← customer dashboard
  style.css       ← fully self-contained styles (copied tokens from main site, not imported)
  auth.js         ← mock login logic
  data.js         ← mock customer records (reports, actions, fields)
  portal.js       ← dashboard rendering logic
```

Do not create or modify any files outside `/portal/`.

---

## Feature scope — Phase 1

### Login page (index.html)
- Email + password form
- On submit: validate against mock data in data.js
- On success: store customer object in a JS module-level variable, redirect to dashboard.html
- On failure: show inline error message — no alert()
- No registration, no password reset

### Dashboard (dashboard.html)
- Top nav: logo/name left, customer name + sign-out button right
- Sign-out clears session, redirects to index.html
- Greeting: "Good morning / afternoon / evening, [First name]"
- Summary cards: total reports, ha serviced, number of fields, planned actions
- Reports table: Report name | Date | Category | Download (PDF link)
- Actions table: Action | Field | Area (ha) | Date | Status (Completed / Planned)

---

## Mock data shape — data.js

```js
// TODO: replace with API call to /api/auth/login
export const CUSTOMERS = {
  "customer@proagrar.si": {
    password: "demo2024",
    name: "Janez Novak",
    reports: [
      // TODO: replace with API call to /api/customer/:id/reports
      { id: 1, title: "Spring Soil Analysis 2024",       date: "2024-03-15", category: "Soil",       url: "/reports/soil-2024.pdf" },
      { id: 2, title: "Pesticide Application Report Q2", date: "2024-06-01", category: "Protection", url: "/reports/pest-q2-2024.pdf" },
      { id: 3, title: "Harvest Summary — North Field",   date: "2024-09-20", category: "Harvest",    url: "/reports/harvest-2024.pdf" },
    ],
    actions: [
      // TODO: replace with API call to /api/customer/:id/actions
      { type: "completed", action: "Herbicide spraying",   field: "North Field", ha: 12.5, date: "2024-05-10" },
      { type: "completed", action: "Soil sampling",        field: "South Field", ha:  8.0, date: "2024-03-02" },
      { type: "planned",   action: "Autumn fertilization", field: "South Field", ha:  8.0, date: "2024-10-10" },
      { type: "planned",   action: "Winter wheat seeding", field: "East Parcel", ha:  5.3, date: "2024-10-25" },
    ]
  }
};
```

---

## Code quality rules
- Semantic HTML: nav, main, section, table
- Every mock data access marked with // TODO: replace with API call to /api/...
- auth.js, data.js, portal.js are strictly separated — no logic bleeding between files
- No alert(), confirm(), or prompt()
- Dates formatted as DD Mon YYYY (e.g. 15 Mar 2024)
- No inline styles — CSS classes only

---

## Git workflow
- Branch per feature: feature/portal-login, feature/portal-dashboard
- Commit messages: imperative and concise — "Add login form", "Render reports table"
- PR to main only — no direct pushes

---

## Out of scope
- Any changes to the main site files
- Shared CSS or JS between portal and main site
- Backend, database, server-side code
- User registration or password reset
- Admin panel, map views, email notifications
