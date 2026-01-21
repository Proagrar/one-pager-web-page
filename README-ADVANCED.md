# 🚀 Proagrar - Profesionalna Spletna Stran

Moderna, production-ready spletna stran za precizno kmetijstvo.

---

## ✨ Vključene Funkcionalnosti

### 🎯 **Core Features**
- ✅ **Shrinking Header** - Zmanjša se ob scrollu (75px → 55px)
- ✅ **Scroll Progress Bar** - Zelena črta na vrhu strani
- ✅ **Parallax Hero** - Hero background se premika ob scrollu
- ✅ **Smooth Scroll** - Gladko scrollanje med sekcijami
- ✅ **Fade-in Animations** - Elementi se pojavljajo ob scrollu
- ✅ **Micro-interactions** - Hover efekti, ripple, transitions
- ✅ **Mobile Responsive** - Optimizirano za vse naprave
- ✅ **Web3Forms Integration** - Direktno pošiljanje emailov

### 🎨 **Design Features**
- ✅ **10 Sekcij** - Hero, Stats, Features, Process, Services, Partners, Testimonials, CTA, Contact, Footer
- ✅ **Lokalne Slike** - SVG placeholders v `/assets/img/`
- ✅ **Logotipi Partnerjev** - 10 SVG logotipov
- ✅ **Gradient Effects** - Modri gradients, animated backgrounds
- ✅ **Professional Typography** - Inter font, optimizirane velikosti
- ✅ **Color Scheme** - Modra #1c4592, Zelena #c6d92d

### ⚡ **Performance Features**
- ✅ **Lazy Loading** - Slike se naložijo po potrebi
- ✅ **SEO Optimized** - Meta tags, semantic HTML
- ✅ **Fast Loading** - Optimizirane animacije (CSS)
- ✅ **Hardware Acceleration** - GPU-accelerated animations

---

## 📁 Struktura Datotek

```
proagrar-site/
├── index.html              # Glavna stran (production ready!)
├── assets/
│   ├── img/
│   │   ├── Proagrar_LOGO-14.png  # Glavni logotip
│   │   ├── hero-bg.svg            # Hero ozadje
│   │   ├── step-1.svg ... step-5.svg  # Process slike
│   │   ├── contact.svg            # Kontakt slika
│   │   └── partner-*.svg          # 10 logotipov partnerjev
│   ├── css/
│   └── js/
├── NASTAVITEV-FORME.md     # Navodila za Web3Forms
└── README-ADVANCED.md      # Ta dokument
```

---

## 🎯 Sekcije Spletne Strani

### 1. **Hero** (Fullscreen)
- Parallax background
- Gradient overlay
- 2 CTA gumba
- Responsive text

### 2. **Statistika**
- 4 metriki
- Animated numbers
- Modra ozadja

### 3. **Prednosti** (4 kartice)
- Hover efekti
- Ikone
- Shine effect

### 4. **Kako Deluje** (5 korakov)
- Alternirajoč layout
- Velike slike
- Step numbers

### 5. **Storitve** (5 kartic)
- Gradient headers
- Professional styling
- Hover lift

### 6. **Partnerji** (10 referenc)
- SVG logotipi
- Grid layout
- Grayscale → Color hover

### 7. **Testimoniali** (3 izjave)
- Quote marks
- Zelena border
- Box shadows

### 8. **CTA Sekcija**
- Gradient background
- Animated circles
- Prominent button

### 9. **Kontakt**
- Split layout (slika + forma)
- Web3Forms
- Validation

### 10. **Footer**
- 3 kolone
- Social ikone
- Copyright

---

## 🚀 Nastavitev

### 1. **Web3Forms API Key**

Odprite `index.html` in poiščite (okoli vrstice 1300):

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

**Zamenjajte** z vašim ključem:
1. Pojdite na https://web3forms.com
2. Registrirajte se z info@proagrar.si
3. Dobite API key
4. Vstavite v index.html

**Brez tega koraka forma ne bo delovala!**

---

## 🎨 Prilagajanje

### **Barve**

V `index.html`, spremeni CSS spremenljivke (okoli vrstica 30):

```css
:root {
    --color-blue: #1c4592;    /* Primarna */
    --color-green: #c6d92d;   /* Akcent */
    --color-white: #FFFFFF;   /* Ozadje */
}
```

### **Logotip**

Zamenjaj `/assets/img/Proagrar_LOGO-14.png` s svojim logotipom.

### **Slike**

Za **prave fotografije** zamenjaj SVG placeholders:
- `hero-bg.svg` → `hero-bg.jpg` (1920x1080)
- `step-1.svg` → `step-1.jpg` (800x600)
- `contact.svg` → `contact.jpg` (800x600)

### **Partnerji**

Za prave logotipe zamenjaj SVG v `/assets/img/partner-*.svg`:
- Transparent PNG format
- 200x100px
- Bela ozadja

---

## 📱 Responsive Breakpoints

```css
Desktop:  > 968px  (Full layout)
Tablet:   768-968px (Adjusted grid)
Mobile:   < 768px  (Stack, hamburger menu)
```

---

## ⚡ Performance Tips

1. **Slike:**
   - Uporabi WebP format (manjše datoteke)
   - Kompresiraj JPG do 80% kvalitete
   - Lazy loading že vključen

2. **Fonts:**
   - Inter font iz Google Fonts
   - Preloaded za hitrejše nalaganje

3. **Animations:**
   - CSS transitions (ne JavaScript)
   - GPU-accelerated (transform, opacity)

---

## 🔧 Dodatne Možnosti

### **Google Analytics**

Dodaj pred `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Cookie Consent**

Dodaj pred `</body>`:

```html
<!-- Cookie Consent -->
<div id="cookie-banner" style="position: fixed; bottom: 0; left: 0; right: 0; background: #1c4592; color: white; padding: 1rem; text-align: center; z-index: 9999;">
  <p>Ta stran uporablja piškotke. <button onclick="document.getElementById('cookie-banner').style.display='none'" style="background: #c6d92d; border: none; padding: 0.5rem 1rem; margin-left: 1rem; cursor: pointer; border-radius: 0.25rem;">V redu</button></p>
</div>
```

---

## 🌐 Deploy Options

### **GitHub Pages**
1. Ustvari GitHub repo
2. Naloži vse datoteke
3. Settings → Pages → Enable
4. URL: `https://username.github.io/repo`

### **Netlify**
1. Drag & drop `/proagrar-site` folder
2. Avtomatski deploy
3. Custom domain support

### **Vercel**
1. Import GitHub repo
2. Auto deploy on push
3. Zero configuration

---

## ✅ Production Checklist

Pred deploy:
- [ ] Web3Forms API key vnesen
- [ ] Telefon in email posodobljen
- [ ] Testiran na mobile (Chrome DevTools)
- [ ] Testiran na desktop
- [ ] Slike optimizirane (če zamenjane)
- [ ] Social media linki pravilni
- [ ] Google Analytics dodan (opcijsko)

---

## 🎯 Kaj je Novo vs. Prejšnja Verzija?

### **Added:**
✅ Scroll progress bar (zelena črta)  
✅ Pravi parallax efekt na hero  
✅ Advanced animations (shine, pulse, rotate)  
✅ Micro-interactions (ripple, hover lifts)  
✅ Lokalne slike (SVG placeholders)  
✅ Logotipi partnerjev (10 SVG)  
✅ SEO meta tags  
✅ Lazy loading  
✅ Better responsive (tablet breakpoint)  
✅ Gradient backgrounds  
✅ Professional typography scale  

### **Improved:**
⬆️ Header shrinking (smoother)  
⬆️ Fade-in animations (stagger)  
⬆️ Hover effects (više kvalitetni)  
⬆️ Mobile navigation (boljši UX)  
⬆️ Form styling (profesionalnejši)  
⬆️ Footer (več informacij)  

---

## 📞 Podpora

Za vprašanja ali težave:
- Email: info@proagrar.si
- Web3Forms support: https://web3forms.com/docs

---

## 📄 Licenca

© 2026 Proagrar. Vse pravice pridržane.

---

**Verzija:** 2.0 Advanced  
**Datum:** Januar 2026  
**Status:** Production Ready ✅
