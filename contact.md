---
layout: default
title: Kontakt
permalink: /contact/
nav_order: 6
---

<section id="contact" class="section section--alt" data-animate>
  <div class="container">
    <header class="section__header">
      <h2 class="section__title">Želiš več informacij?</h2>
      <p class="section__lead">
        Prijavi se – oddaj svoje kontaktne podatke in svoje vprašanje.
      </p>
      <p class="muted">
        Po oddaji te kontaktiramo glede razpoložljivosti in naslednjih korakov (analiza, mape, izvedba, svetovanje).
      </p>
    </header>

    <!--
      Developer placeholder (backend):
      Implement endpoint that accepts JSON payload, e.g. POST /api/leads
      GitHub Pages fallback is handled in JS (mailto).
    -->

    <form id="leadForm" class="form" data-endpoint="{{ site.leads.endpoint | default: '' }}">
      <div class="grid grid--2">
        <div class="field">
          <label for="ime">Ime *</label>
          <input id="ime" name="ime" type="text" autocomplete="given-name" required>
        </div>

        <div class="field">
          <label for="priimek">Priimek *</label>
          <input id="priimek" name="priimek" type="text" autocomplete="family-name" required>
        </div>

        <div class="field">
          <label for="email">E-pošta</label>
          <input id="email" name="email" type="email" autocomplete="email" placeholder="npr. ime@domena.si">
        </div>

        <div class="field">
          <label for="telefon">Kontaktna tel. št.</label>
          <input id="telefon" name="telefon" type="tel" autocomplete="tel" placeholder="npr. 041 000 000">
        </div>

        <div class="field">
          <label for="naslov">Naslov</label>
          <input id="naslov" name="naslov" type="text" autocomplete="street-address">
        </div>

        <div class="field">
          <label for="regija">Regija (izbirno)</label>
          <select id="regija" name="regija">
            <option value="">Izberi regijo</option>
            <option>Pomurska</option>
            <option>Podravska</option>
            <option>Koroška</option>
            <option>Savinjska</option>
            <option>Zasavska</option>
            <option>Posavska</option>
            <option>Jugovzhodna Slovenija</option>
            <option>Osrednjeslovenska</option>
            <option>Gorenjska</option>
            <option>Primorsko-notranjska</option>
            <option>Goriška</option>
            <option>Obalno-kraška</option>
          </select>
        </div>

        <div class="field">
          <label for="mid">MID št.</label>
          <input id="mid" name="mid" type="text" inputmode="numeric" placeholder="npr. 123456">
        </div>

        <div class="field">
          <label for="dejavnost">Dejavnost kmetije (izbirno)</label>
          <select id="dejavnost" name="dejavnost">
            <option value="">Izberi dejavnost</option>
            <option value="sadjar">Sadjar</option>
            <option value="poljedelstvo">Poljedelstvo</option>
            <option value="vinogradnistvo">Vinogradništvo</option>
            <option value="zivinorejstvo">Živinorejstvo</option>
          </select>
        </div>

        <div class="field">
          <label for="hektarji">Število ha</label>
          <input id="hektarji" name="hektarji" type="number" min="0" step="0.1" inputmode="decimal" placeholder="npr. 60">
        </div>

        <div class="field">
          <label for="storitev">Storitev (izbirno)</label>
          <select id="storitev" name="storitev">
            <option value="">Izberi storitev</option>
            <option>Precizna analiza travinja</option>
            <option>Precizna analiza polja</option>
            <option>Precizna analiza vinograda</option>
            <option>Precizna analiza sadovnjaka</option>
            <option>Priprava gnojilnih map</option>
            <option>Priprava setvenih map</option>
            <option>Izvedba (gnojenje/setev/zaščita)</option>
            <option>Strokovno svetovanje</option>
          </select>
        </div>

        <div class="field">
          <label for="vir">Kako ste izvedeli za naše storitve? (izbirno)</label>
          <select id="vir" name="vir">
            <option value="">Izberi</option>
            <option>Priporočilo</option>
            <option>Splet / Google</option>
            <option>Družbena omrežja</option>
            <option>Dogodek / sejem</option>
            <option>Oglaševanje</option>
            <option>Drugo</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label for="sporocilo">Vaše vprašanje / sporočilo *</label>
        <textarea id="sporocilo" name="sporocilo" rows="5" required placeholder="Katero storitev potrebujete in za katero kulturo/površino?"></textarea>
      </div>

      <div class="form__actions">
        <button type="submit" class="btn btn--primary">Pošlji povpraševanje</button>
        <p class="form__note muted" id="formNote">
          * Obvezna polja. Potrebujemo vsaj e-pošto ali telefonsko številko.
        </p>
      </div>

      <div class="form__status" id="formStatus" aria-live="polite"></div>
    </form>
  </div>
</section>
