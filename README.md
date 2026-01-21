# Proagrar - Precizno kmetijstvo

Moderna, odzivna spletna stran za precizno kmetijstvo, zgrajena z Jekyll za GitHub Pages.

## Značilnosti

- ✅ Popolnoma odziven dizajn (mobile-first)
- ✅ Podpora za svetlo/temno temo
- ✅ Dostopnost (WCAG 2.1)
- ✅ SEO optimizirana
- ✅ Hitra in lahka (brez težkih odvisnosti)
- ✅ Plavajoči chat widget
- ✅ Kontaktni obrazec z validacijo
- ✅ Gladke animacije
- ✅ Slovenski jezik

## Tehnologije

- **Jekyll** - Generator statičnih strani
- **HTML5** - Semantična razčlenitev
- **CSS3** - Moderni, odzivni slogi
- **Vanilla JavaScript** - Brez odvisnosti od frameworkov
- **GitHub Pages** - Brezplačno gostovanje

## Struktura projekta

```
proagrar-site/
├── _config.yml              # Jekyll konfiguracija
├── _layouts/
│   └── default.html         # Glavna predloga
├── _includes/
│   ├── header.html          # Glava strani
│   └── footer.html          # Noga strani
├── assets/
│   ├── css/
│   │   └── styles.css       # Vsi slogi
│   ├── js/
│   │   └── main.js          # JavaScript funkcionalnost
│   └── img/                 # Slike
├── index.md                 # Domača stran
├── about.md                 # O preciznem kmetijstvu
├── services.md              # Storitve
├── cases.md                 # Uporabniška izkušnja
├── contact.md               # Kontakt
└── README.md               # Ta datoteka
```

## Lokalni razvoj

### Predpogoji

- Ruby 2.7 ali višje
- Bundler

### Nastavitev

1. Klonirajte repozitorij:
```bash
git clone https://github.com/yourusername/proagrar-site.git
cd proagrar-site
```

2. Namestite odvisnosti:
```bash
bundle install
```

3. Zaženite razvojni strežnik:
```bash
bundle exec jekyll serve
```

4. Odprite brskalnik na `http://localhost:4000`

## Objava na GitHub Pages

1. Ustvarite nov repozitorij na GitHubu
2. Potisnite kodo:
```bash
git init
git add .
git commit -m "Začetna objava"
git branch -M main
git remote add origin https://github.com/yourusername/proagrar-site.git
git push -u origin main
```

3. Omogočite GitHub Pages:
   - Pojdite v Settings > Pages
   - Izberite "main" vejo
   - Shranite

Stran bo na voljo na `https://yourusername.github.io/proagrar-site/`

## Prilagoditev

### Posodobitev podatkov podjetja

Uredite `_config.yml`:
```yaml
company:
  email: info@proagrar.si
  phone: +386 41 000 000
```

### Urejanje vsebine

Vsa vsebina je v Markdown datotekah:
- `index.md` - Domača stran
- `about.md` - O preciznem kmetijstvu
- `services.md` - Storitve
- `cases.md` - Uporabniška izkušnja
- `contact.md` - Kontakt

### Dodajanje logotipa

Postavite logo v `assets/img/Proagrar_LOGO-17.svg`

### Integracija z backendom

Kontaktni obrazec poskuša POST na konfigurirano končno točko. Za integracijo:

1. Ustvarite API končno točko ki sprejme:
```json
{
  "ime": "string",
  "priimek": "string",
  "email": "string",
  "telefon": "string",
  "sporocilo": "string",
  ...
}
```

2. Posodobite `_config.yml`:
```yaml
leads:
  endpoint: "https://your-api.com/leads"
```

**Nadomestna rešitev**: Če backend ni na voljo, obrazec uporabi mailto.

## Podpora brskalnikov

- Chrome/Edge (zadnji 2 verziji)
- Firefox (zadnji 2 verziji)
- Safari (zadnji 2 verziji)
- Mobilni brskalniki

## Dostopnost

- WCAG 2.1 Level AA
- Semantični HTML5
- ARIA oznake
- Podpora tipkovnici
- Povezave za preskok

## Licenca

Copyright © 2026 Proagrar. Vse pravice pridržane.

---

Narejeno z ❤️ za slovensko kmetijstvo.
