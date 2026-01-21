# 🚀 Hitra začetek

## Lokalno testiranje (brez Jekyll)

Če želite hitro preveriti, kako bo stran izgledala:

### Možnost 1: Python (priporočeno)

```bash
cd proagrar-site
python3 -m http.server 8000
```

Odprite: `http://localhost:8000`

**OPOMBA:** Brez Jekyll bo stran delovala, vendar:
- Navigacija ne bo delovala
- Logotip bo manjkal
- Jekyll spremenljivke ({{ ... }}) bodo vidne kot tekst

To je normalno! Za pravilno delovanje uporabite Jekyll (spodaj) ali GitHub Pages.

---

## Lokalno testiranje z Jekyll (pravilno)

### 1. Namestite Ruby in Jekyll

**Windows:**
- Prenesite RubyInstaller: https://rubyinstaller.org/
- Namestite z DevKit
- V command prompt: `gem install bundler jekyll`

**macOS:**
```bash
brew install ruby
gem install bundler jekyll
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install ruby-full build-essential
gem install bundler jekyll
```

### 2. Zaženite lokalni strežnik

```bash
cd proagrar-site
bundle install
bundle exec jekyll serve
```

Odprite: `http://localhost:4000`

Sedaj bo stran delovala popolnoma pravilno!

---

## Deploy na GitHub Pages

### 1. Ustvarite GitHub račun
Če ga še nimate: https://github.com/signup

### 2. Ustvarite nov repozitorij

1. Pojdite na: https://github.com/new
2. Repository name: `proagrar-site`
3. Public
4. **NE** dodajte README
5. Create repository

### 3. Potisnite kodo

```bash
cd proagrar-site

# Inicializirajte git
git init
git add .
git commit -m "Začetna objava Proagrar spletne strani"

# Povežite z GitHub (zamenjajte USERNAME)
git remote add origin https://github.com/USERNAME/proagrar-site.git
git branch -M main
git push -u origin main
```

### 4. Omogočite GitHub Pages

1. V repozitoriju: **Settings** → **Pages**
2. Source: **main** branch
3. Folder: **/ (root)**
4. Save

### 5. Počakajte 2-5 minut

Stran bo dostopna na:
```
https://USERNAME.github.io/proagrar-site/
```

---

## Posodobitve

Ko spremenite vsebino:

```bash
git add .
git commit -m "Posodobljena vsebina"
git push
```

GitHub Pages bo avtomatsko posodobil stran v 1-2 minutah.

---

## Pomoč

### Logotip se ne prikazuje
- Preverite, da ste zagnali Jekyll (`bundle exec jekyll serve`)
- Brez Jekyll logotip ne bo viden (to je normalno)
- Na GitHub Pages bo deloval pravilno

### Stran je prazna
- Počakajte 5 minut po prvi objavi
- Preverite Settings → Pages
- Poglejte zavihek Actions za napake

### CSS se ne naloži
- Očistite cache (Ctrl+Shift+R)
- Preverite, da je `.nojekyll` datoteka prisotna

---

**Potrebujete pomoč?** Poglejte `DEPLOY.md` za podrobna navodila.
