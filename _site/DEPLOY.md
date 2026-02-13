# Navodila za deploy (objavo)

## Hitri deploy na GitHub Pages

### 1. Prenesite ZIP in razpakirajte

Razpakirajte `proagrar-site.zip` v mapo na vašem računalniku.

### 2. Ustvarite GitHub repozitorij

1. Pojdite na https://github.com/new
2. Ime repozitorija: `proagrar-site` (ali poljubno ime)
3. Izberite **Public**
4. **NE** dodajte README, .gitignore ali licence (že imate)
5. Kliknite **Create repository**

### 3. Potisnite kodo na GitHub

Odprite terminal/command prompt v mapi projekta in izvedite:

```bash
# Inicializirajte git repozitorij
git init

# Dodajte vse datoteke
git add .

# Ustvarite prvi commit
git commit -m "Začetna objava Proagrar spletne strani"

# Povežite z GitHub repozitorijem (zamenjajte USERNAME in REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Potisnite kodo
git branch -M main
git push -u origin main
```

### 4. Omogočite GitHub Pages

1. V GitHub repozitoriju pojdite na **Settings** (Nastavitve)
2. V levem meniju kliknite **Pages**
3. V razdelku **Source** izberite:
   - Branch: `main`
   - Folder: `/ (root)`
4. Kliknite **Save**

### 5. Počakajte na objavo

GitHub Pages bo potreboval 2-5 minut za objavo. Stran bo dostopna na:

```
https://USERNAME.github.io/REPO/
```

Primer: `https://janeznovak.github.io/proagrar-site/`

---

## Deploy z lastno domeno

Če želite uporabiti svojo domeno (npr. `www.proagrar.si`):

### 1. Dodajte CNAME datoteko

Ustvarite datoteko `CNAME` v korenu projekta z vsebino:

```
www.proagrar.si
```

### 2. Konfigurirajte DNS

Pri vašem ponudniku domen dodajte:

**Za www podomeno:**
```
Type: CNAME
Name: www
Value: USERNAME.github.io
```

**Za apex domeno (proagrar.si):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### 3. Posodobite GitHub Pages nastavitve

1. V GitHub repozitoriju pojdite na **Settings** → **Pages**
2. V polje **Custom domain** vnesite: `www.proagrar.si`
3. Potrdite **Enforce HTTPS** (priporočeno)
4. Kliknite **Save**

DNS spremembe lahko trajajo do 48 ur.

---

## Lokalni razvoj in testiranje

### Predpogoji

- Ruby 2.7+ ([Prenos](https://www.ruby-lang.org/en/downloads/))
- Bundler (`gem install bundler`)

### Namestitev

```bash
# Namestite odvisnosti
bundle install

# Zaženite lokalni strežnik
bundle exec jekyll serve

# Odprite v brskalniku
# http://localhost:4000
```

### Hitro testiranje brez Jekyll

Če ne želite nameščati Ruby/Jekyll, lahko uporabite katerokoli enostavno HTTP strežnik:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (npx)
npx http-server

# PHP
php -S localhost:8000
```

**OPOMBA**: Brez Jekyll Liquid tags (`{{ ... }}`) ne bodo delovale. Za produkcijo vedno uporabite GitHub Pages ali lokalni Jekyll.

---

## Struktura projekta

```
proagrar-site/
├── _config.yml              # Glavna konfiguracija
├── _layouts/                # Predloge strani
├── _includes/               # Deljeni komponenti (header, footer)
├── assets/                  # CSS, JS, slike
│   ├── css/styles.css      # Vsi slogi
│   ├── js/main.js          # JavaScript
│   └── img/                # Logotipi in slike
├── index.md                 # Domača stran
├── about.md                 # O nas
├── services.md              # Storitve
├── cases.md                 # Uporabniška izkušnja
├── contact.md               # Kontakt
├── .nojekyll               # Za GitHub Pages (prazen file)
└── README.md               # Navodila
```

---

## Posodobitve vsebine

### Urejanje besedila

Vse vsebine so v `.md` datotekah. Odprite v urejevalniku besedila in uredite:

- `index.md` - Domača stran
- `about.md` - O preciznem kmetijstvu
- `services.md` - Storitve in FAQ
- `cases.md` - Izjave kmetov
- `contact.md` - Kontaktni obrazec

### Urejanje nastavitev

Uredite `_config.yml`:

```yaml
company:
  email: info@proagrar.si      # Vaš e-mail
  phone: +386 41 000 000       # Vaša telefonska

brand:
  name: Proagrar
  tagline: Vaš slogan
```

### Dodajanje slik

1. Slike dodajte v `assets/img/`
2. V `.md` datotekah jih uporabite:

```html
<img src="{{ '/assets/img/moja-slika.jpg' | relative_url }}" alt="Opis">
```

### Objava sprememb

```bash
git add .
git commit -m "Posodobljena vsebina"
git push
```

GitHub Pages bo avtomatsko posodobil stran v 1-2 minutah.

---

## Integracija kontaktnega obrazca

Privzeto obrazec uporablja **mailto** fallback. Za pravo integracijo:

### Možnost 1: Formspree (enostavno)

1. Registrirajte se na https://formspree.io
2. Ustvarite nov obrazec
3. Kopirajte endpoint URL
4. Posodobite `_config.yml`:

```yaml
leads:
  endpoint: "https://formspree.io/f/VAŠA_KODA"
```

### Možnost 2: Lastni backend

Ustvarite API endpoint, ki sprejme POST zahtevo:

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

Posodobite `_config.yml` z vašim URL-jem.

---

## Reševanje težav

### Stran se ne prikazuje pravilno

1. Preverite, da je GitHub Pages omogočen
2. Počakajte 5 minut po prvi objavi
3. Preverite zavihek **Actions** za napake

### CSS se ne naloži

1. Preverite, da je `.nojekyll` datoteka prisotna
2. Očistite predpomnilnik brskalnika (Ctrl+Shift+R)
3. Preverite konzolo brskalnika za napake

### Logotip manjka

1. Preverite, da je `Proagrar_LOGO-17.svg` v `assets/img/`
2. Preverite pot v `_includes/header.html`

### Obrazci ne delujejo

- Brez backenda obrazec uporabi mailto
- Preverite, da imate nastavljeno e-pošto v `_config.yml`

---

## Podpora

Za težave ali vprašanja odprite Issue na GitHub repozitoriju ali pišite na podporo.

---

**Spletna stran je pripravljena za produkcijo!** 🚀

Vse je nastavljeno za profesionalno predstavitev vašega podjetja.
