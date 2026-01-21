# 📧 Nastavitev kontaktne forme

Kontaktna forma uporablja **Web3Forms** - brezplačno storitev za pošiljanje emailov direktno iz spletne forme brez mail clienta.

---

## 🚀 Hitra nastavitev (5 minut)

### 1. Registracija na Web3Forms

1. Pojdite na: **https://web3forms.com**
2. Kliknite **"Get Started Free"**
3. Vnesite vaš email: **info@proagrar.si**
4. Preverite email in potrdite

### 2. Dobite Access Key

1. Po prijavi boste dobili **Access Key** (API ključ)
2. Izgleda tako: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
3. **Kopirajte** ta ključ

### 3. Vstavite ključ v spletno stran

Odprite `index.html` in poiščite to vrstico (okoli vrstice 380):

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

**Zamenjajte** `YOUR_ACCESS_KEY_HERE` z vašim ključem:

```html
<input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
```

### 4. Shranite in naložite

1. Shranite `index.html`
2. Naložite na vaš strežnik ali GitHub Pages
3. **Forma je pripravljena!** ✅

---

## ✅ Kako deluje

Ko uporabnik izpolni formo:

1. Klikne "Pošlji sporočilo"
2. Gumb pokaže "Pošiljam..."
3. Forma pošlje podatke na Web3Forms API
4. Web3Forms pošlje email na **info@proagrar.si**
5. Uporabnik vidi "✓ Sporočilo uspešno poslano!"
6. Forma se počisti

**Email vsebuje:**
- Ime in priimek
- E-pošta uporabnika
- Telefon
- Podjetje/Kmetija
- Sporočilo

---

## 🎁 Brezplačni plan

**Web3Forms FREE:**
- ✅ 250 emailov / mesec
- ✅ Email potrdila
- ✅ Brez oglaševanja
- ✅ Spam zaščita
- ✅ File uploads (opcijsko)

**Če potrebujete več:**
- Pro plan: €4.90/mesec (1000 emailov)
- Business: €9.90/mesec (5000 emailov)

---

## 🔧 Dodatne nastavitve (opcijsko)

### Email potrdilo uporabniku

V `index.html` dodajte:

```html
<input type="hidden" name="redirect" value="https://proagrar.si/hvala">
```

Po oddaji forme se uporabnik preusmeri na stran `/hvala`.

### Custom email predloga

V Web3Forms dashboard:
1. **Settings** → **Email Template**
2. Uredite predlogo po želji
3. Dodajte svoj logo

### Spam zaščita

Web3Forms ima vgrajeno spam zaščito. Dodatno lahko dodate:

```html
<input type="checkbox" name="botcheck" class="hidden" style="display: none;">
```

---

## 🆘 Alternativa: Formspree

Če Web3Forms ne deluje, lahko uporabite **Formspree**:

1. Pojdite na: **https://formspree.io**
2. Registrirajte se
3. Ustvarite nov form
4. Kopirajte form endpoint URL

V `index.html` zamenjajte `handleSubmit` funkcijo:

```javascript
async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });
    
    if (response.ok) {
        alert('Sporočilo poslano!');
        form.reset();
    }
}
```

**Formspree FREE:** 50 emailov/mesec

---

## 📊 Primerjava storitev

| Storitev | Brezplačno | Mesečno (plačljivo) | Spam filter |
|----------|------------|---------------------|-------------|
| **Web3Forms** | 250 | €4.90 (1000) | ✅ |
| **Formspree** | 50 | $8 (1000) | ✅ |
| **EmailJS** | 200 | $7 (1000) | ⚠️ |

**Priporočilo:** Web3Forms (največ brezplačnih emailov)

---

## ✅ Testiranje

Po nastavitvi:

1. Odprite vašo stran
2. Izpolnite formo
3. Kliknite "Pošlji sporočilo"
4. Preverite **info@proagrar.si** inbox

Če ne deluje:
- Preverite access key
- Preverite spam folder
- Preverite browser konzolo (F12)

---

## 🔒 Varnost

Web3Forms:
- ✅ HTTPS encryption
- ✅ GDPR compliant
- ✅ No data storage (emails se samo posredujejo)
- ✅ Rate limiting (preprečuje spam)

---

**Forma je pripravljena za uporabo!** 🚀

Potrebujete samo **Access Key** in deluje! 
