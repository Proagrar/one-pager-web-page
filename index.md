---
layout: default
title: Proagrar  - Precizno kmetijstvo
description: Precizno kmetijstvo za merljiv ROI. Optimiziramo vložke, pridelke in skladnost z naprednimi tehnologijami.
permalink: /
nav_order: 1
---

<!-- HERO SECTION -->
<section class="hero" id="domov">
    <div class="hero-bg" id="hero-bg"></div>
    <div class="container">
        <div class="hero-content fade-in">
            <h1>Gospodarno z manj stroški do večjega in boljšega pridelka ter žive zemlje</h1>
            <p>Proagrar – vaš strokovni partner za precizno kmetijstvo.</p>
            <div class="hero-cta">
                <a href="#kontakt" class="btn btn-primary">Kontaktiraj nas</a>
            </div>
        </div>
    </div>
</section>

<!-- STATS SECTION -->
<section class="stats-section">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-item fade-in">
                <span class="stat-number">50+</span>
                <span class="stat-label">zadovoljnih naročnikov</span>
            </div>
            <div class="stat-item fade-in">
                <span class="stat-number">20+</span>
                <span class="stat-label">let izkušenj</span>
            </div>
            <div class="stat-item fade-in">
                <span class="stat-number">98%+</span>
                <span class="stat-label">uspešnost projektov</span>
            </div>
            <div class="stat-item fade-in">
                <span class="stat-number">10.000+</span>
                <span class="stat-label">ha opravljenih analiz</span>
            </div>
        </div>
    </div>
</section>

<!-- FEATURES -->
<section class="section" id="prednosti">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title">Zakaj precizno kmetijstvo?</h2>
            <!-- <p class="section-subtitle">Optimiziramo vložke, pridelke in skladnost z zahtevami za maksimalno učinkovitost</p> -->
        </div>
        <div class="features-grid">
            <div class="feature-card fade-in">
                <div class="feature-badge" style="background: #1c4592;">
                    <img src="{{ '/assets/img/icon_vecjipridelek.svg' | relative_url }}" alt="Večji pridelek" width="28" height="28">
                </div>
                <h3>Večji pridelek</h3>
                <p>Natančnost za večjo donosnost.</p>
            </div>
            <div class="feature-card fade-in">
                <div class="feature-badge" style="background: #001337;">
                    <img src="{{ '/assets/img/Icon_nizjistroski.svg' | relative_url }}" alt="Nižji stroški" width="28" height="28">
                </div>
                <h3>Nižji stroški</h3>
                <p>Porabite le toliko, kot je potrebno.</p>
            </div>
            <div class="feature-card fade-in">
                <div class="feature-badge" style="background: #4a6b1a;">
                    <img src="{{ '/assets/img/icon_manjsivpliv.svg' | relative_url }}" alt="Manjši vpliv na okolje" width="28" height="28">
                </div>
                <h3>Manjši vpliv na okolje</h3>
                <p>Varno z naravo, varno za prihodnost.</p>
            </div>
            <div class="feature-card fade-in">
                <div class="feature-badge" style="background: #3d5a0a;">
                    <img src="{{ '/assets/img/icon_donos.svg' | relative_url }}" alt="Donos na investicijo" width="28" height="28">
                </div>
                <h3>Donos na investicijo</h3>
                <p>Investicija, ki se bogato obrestuje.</p>
            </div>
        </div>
    </div>
</section>

<!-- REFERENCES -->
<section class="section" id="reference">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title">Zaupajo nam</h2>
        </div>
    </div>

    <div class="logo-slider-wrap">
        <div id="logo-pages">
            <div class="logo-page active">
                <img src="{{ '/assets/img/Logos/LOGO-KGZ-LITIJA.svg' | relative_url }}" alt="KGZ Litija" loading="lazy">
                <img src="{{ '/assets/img/Logos/Logo-Skrjanec.jpg' | relative_url }}" alt="Škrjanec" loading="lazy">
                <img src="{{ '/assets/img/Logos/Logo-ekosirarna.jpg' | relative_url }}" alt="Ekosirarna" loading="lazy">
            </div>
            <div class="logo-page">
                <img src="{{ '/assets/img/Logos/logo-karlovcek.jpg' | relative_url }}" alt="Karlovček" loading="lazy">
                <img src="{{ '/assets/img/Logos/Logo-Colja.svg' | relative_url }}" alt="Colja" loading="lazy">
                <img src="{{ '/assets/img/Logos/Logo-medle.svg' | relative_url }}" alt="Medle" loading="lazy">
            </div>
        </div>
        <div class="logo-dots" id="logo-dots">
            <button class="logo-dot active" data-index="0" aria-label="Stran 1"></button>
            <button class="logo-dot" data-index="1" aria-label="Stran 2"></button>
        </div>
    </div>
    <script>
    (function() {
        var dots = document.querySelectorAll('.logo-dot');
        var pages = document.querySelectorAll('.logo-page');
        var current = 0;

        function goTo(idx) {
            if (idx < 0 || idx >= pages.length) return;
            var forward = idx > current;
            pages.forEach(function(p, i) {
                p.classList.remove('active', 'prev');
                if (i < idx) p.classList.add('prev');
            });
            pages[idx].classList.add('active');
            dots.forEach(function(d) { d.classList.remove('active'); });
            dots[idx].classList.add('active');
            current = idx;
        }

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                goTo(parseInt(this.dataset.index));
            });
        });

        // Touch swipe
        var touchStartX = 0;
        var container = document.getElementById('logo-pages');
        container.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });
        container.addEventListener('touchend', function(e) {
            var diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) {
                goTo(diff > 0 ? current + 1 : current - 1);
            }
        }, { passive: true });
    })();
    </script>

    <div class="container">
        <div class="testimonials-grid">
            <div class="testimonial-card fade-in">
                <div class="testimonial-header">
                    <div class="testimonial-avatar" style="background: #1c4592;">
                        <img src="{{ '/assets/img/JanezSkrjanec.jpg' | relative_url }}" alt="Janez Škrjanec" width="48" height="48">
                    </div>
                    <div class="testimonial-identity">
                        <h4>Janez Škrjanec</h4>
                        <p class="testimonial-meta">Živinorejec · 60 ha travinje</p>
                    </div>
                </div>
                <p class="testimonial-content">"Precizno travinje? Seveda. Od preciznih analiz, izvajanju gnojenja ter svetovanju glede primernih gnojil ter skrbi za travinje prepuščamo Proagrarju. Jasno nam je, da je kakovost našega mleka in naših izdelkov odvisna tudi v veliki meri od krme, ki jo uživa naše govedo…hkrati pa je kakovost sena odvisna od naše predanosti travinju. Z uvedbo preciznega smo optimizirali razvoz org. gnojil (gnojevke) ter optimizirali (bolje rečeno minimalizirali) uporabo mineralnih gnojil."</p>
                <p class="testimonial-summary">Več za manj</p>
            </div>

            <div class="testimonial-card fade-in">
                <div class="testimonial-header">
                    <div class="testimonial-avatar" style="background: #001337;">
                        <img src="{{ '/assets/img/FrancStih.jpg' | relative_url }}" alt="Franc Štih" width="48" height="48">
                    </div>
                    <div class="testimonial-identity">
                        <h4>Franc Štih</h4>
                        <p class="testimonial-meta">Poljedelec · 200+ ha</p>
                    </div>
                </div>
                <p class="testimonial-content">"Z uvedbo preciznega kmetijstva kamor sodi na osnovanih analizah nadaljnje precizno gnojenje ter kasneje precizna setev. Kot prvo je bistveno spoznati kakšna gnojila potrebujemo (premik od NPK sestavljenih) na samostojna gnojila (DAP in ali KCL) kar omogoča optimalno zalaganje tal za maksimalni pridelek. V nadaljevanju prva gnojenja z mapami in prve setve z mapami."</p>
                <p class="testimonial-summary">Boljši pridelki ter izjemno presenečeni nad boljšo homogenostjo.</p>
            </div>

            <div class="testimonial-card fade-in">
                <div class="testimonial-header">
                    <div class="testimonial-avatar" style="background: #4a6b1a;">
                        <img src="{{ '/assets/img/TadejStoka.jpg' | relative_url }}" alt="Tadej Štoka" width="48" height="48" class="avatar-tadej">
                    </div>
                    <div class="testimonial-identity">
                        <h4>Tadej Štoka</h4>
                        <p class="testimonial-meta">Trajni nasadi · Kras, 10 ha</p>
                    </div>
                </div>
                <p class="testimonial-content">"Ob vzpostavitvi preciznih analiz smo spoznali razlike ne samo med posameznimi nasadi/vinogradi temveč tudi kar je najpomembnejše znotraj njih samih. Zavedali smo se, da je sistem tal kompleksen a ne, da je tako kompleksen…jah varira vse od %humusa do podhranjenosti z fosforjem ter neredom z mikroelementi. Po opravljeni analizah se naše sodelovanje nadaljuje z gnojenjem po mapah in svetovanjem o varstvu ter potencialni foliarni prehrani."</p>
                <p class="testimonial-summary">Opazen napredek, kar preseneca, pozitivno</p>
            </div>
        </div>
    </div>
</section>

<!-- HOW IT WORKS -->
<section class="process-section" id="kako-deluje">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title process-title">Kaj in kako delamo?</h2>
        </div>

        <div class="process-grid">
            <div class="process-card fade-in">
                <div class="process-circle-img"><img src="{{ '/assets/img/Segmentacija in vzorcenje.svg' | relative_url }}" alt="Segmentacija in vzorčenje tal"></div>
                <h3>Segmentacija in vzorčenje tal</h3>
                <p>Z analizo večletnih satelitskih posnetkov in rastnih indeksov natančno razmejimo vaše polje na predele z visoko, povprečno in nižjo produktivnostjo. Naš agrarni tehnik na podlagi teh podatkov določi segmente, kjer nato z preciznostjo odvzamemo več vzorcev tal. Tako dobimo jasen vpogled v fizikalno in kemijsko sestavo vsakega segmenta polja posebej (strukturo tal, vodno kapaciteto, hranilne potrebe ...).</p>
            </div>
            <div class="process-card fade-in">
                <div class="process-circle-img"><img src="{{ '/assets/img/Obdelava podatkov in optimizacija.svg' | relative_url }}" alt="Obdelava podatkov in optimizacija"></div>
                <h3>Obdelava podatkov in optimizacija</h3>
                <p>Vzorci zemlje v najkrajšem času potujejo v laboratorij. Ob prispelih podatkih iz laboratorija se opravi izračun potrebe po vnosu elementov, pri čemer prvo vnesemo plan vnosa organskih gnojil, kar generira jasen izračun in priporočilo o gnojenju posevka za naslednjo sezono. Poročilo je jasno, enostavno ter vključuje bistvene elemente v tleh.</p>
            </div>
            <div class="process-card fade-in">
                <div class="process-circle-img"><img src="{{ '/assets/img/Prijava gnojilnih in setvenih map.svg' | relative_url }}" alt="Priprava gnojilnih in setvenih map"></div>
                <h3>Priprava gnojilnih in setvenih map</h3>
                <p>Bistveno je razumevanje podatkov ter personalizacija vsakega polja, znotraj večjih polj pa posameznega segmenta znotraj polja. Predstavljajte si, da je vsak predel polja, travnika, vinograda ali sadovnjaka preskrbljen optimalno, da na delih z večjim potencialom ne primanjkuje hranil, medtem ko na drugih delih preprečimo presežke.</p>
            </div>
            <div class="process-card fade-in">
                <div class="process-circle-img"><img src="{{ '/assets/img/Storitve preciznega kmetijstva.svg' | relative_url }}" alt="Storitve preciznega kmetijstva"></div>
                <h3>Storitve preciznega kmetijstva</h3>
                <p>Vaša kmetija potrebuje uslugo gnojenja, setve, zaščite posevka? Za vas lahko to pravimo mi, s podporo najnovejše mehanizacije in strokovnim znanjem.</p>
            </div>
            <div class="process-card fade-in">
                <div class="process-circle-img"><img src="{{ '/assets/img/Strokovna podpora in svetovanje.svg' | relative_url }}" alt="Strokovna podpora in svetovanje"></div>
                <h3>Strokovna podpora in svetovanje</h3>
                <p>Precizna analiza tal je začetek procesa. V času od analize vam je potreben nekdo, ki razume tla, elemente v tleh, potrebe posevka in doseganje najvišjih standardov v proizvodnji z uporabo najnovejših tehnologij za ustvarjanje presežkov.</p>
            </div>
        </div>
    </div>
</section>

<!-- FAQ SECTION -->
<section class="faq-section" id="faq">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title">Pogosta vprašanja</h2>
        </div>
        <div class="faq-list">

            <div class="faq-item fade-in">
                <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
                    <span>Kaj je precizno kmetijstvo?</span>
                    <svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <p>Precizno kmetijstvo je pristop, ki z zbiranjem in analizo podatkov (analize tal, satelitski posnetki, rastni indeksi) omogoča natančno odločanje o gnojenju, setvi in zaščiti posevkov. Namesto enotnega pristopa za celotno polje se vsak predel obravnava individualno glede na dejanske potrebe – tako dosegamo večje pridelke ob manjši porabi vložkov.</p>
                </div>
            </div>

            <div class="faq-item fade-in">
                <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
                    <span>Kako poteka vzorčenje tal?</span>
                    <svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <p>Najprej z analizo satelitskih posnetkov in rastnih indeksov razdelimo vaše polje na segmente glede na produktivnost. Nato naš tehnik na terenu odvzame vzorce tal iz vsakega segmenta. Vzorci gredo v akreditiran laboratorij, rezultati pa so osnova za personalizirano gnojilno poročilo in mape.</p>
                </div>
            </div>

            <div class="faq-item fade-in">
                <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
                    <span>Za kakšne kmetije je primerno precizno kmetijstvo?</span>
                    <svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <p>Precizno kmetijstvo je primerno za vse tipe kmetij – od manjših družinskih do večjih gospodarstev. Delamo s poljščinami, travinjem, sadovnjaki in vinogradi. Večji kot je obdelovalni obseg, hitrejša je povrnitev investicije, a koristi so vidne že od prvih hektarjev.</p>
                </div>
            </div>

            <div class="faq-item fade-in">
                <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
                    <span>Koliko stane analiza tal?</span>
                    <svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <p>Cena je odvisna od velikosti in tipa kmetije ter obsega analiz. Pripravimo vam natančno ponudbo po brezplačnem uvodnem pogovoru. Naši naročniki povprečno dosežejo 10-kratni donos na investicijo že v prvi sezoni po uvedbi preciznega gnojenja.</p>
                </div>
            </div>

            <div class="faq-item fade-in">
                <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
                    <span>Kako dolgo traja celoten postopek od vzorčenja do priporočil?</span>
                    <svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <p>Od vzorčenja na terenu do prejema poročila z gnojilnimi priporočili in mapami praviloma pretečeta 2–4 tedna. Laboratorijska analiza traja 7–14 dni, obdelava podatkov in priprava personaliziranega poročila pa dodatnih nekaj dni. V sezoni visokih zahtev vas o natančnem roku obvestimo vnaprej.</p>
                </div>
            </div>

            <div class="faq-item fade-in">
                <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
                    <span>Ali potrebujem GPS mehanizacijo za precizno gnojenje?</span>
                    <svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <p>Ni nujno. Gnojilne mape so v celoti koristne že pri ročnem ali standardnem nanašanju, saj jasno pokažejo, kje in koliko gnojiti. Za polno preciznost (variabilno nanašanje) pa ponujamo tudi izvedbo z lastno GPS mehanizacijo – v tem primeru sami poskrbimo za celoten postopek.</p>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- O NAS -->
<section class="onas-section" id="o_nas">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title onas-title">O nas</h2>
        </div>
        <div class="onas-grid fade-in">
            <p>V želji po sožitju z naravo in uživanju kakovostnih lokalnih pridelkov smo združili moči strokovnjaki s področja agronomije in digitalnih storitev. Naše poslanstvo je podpreti slovenske kmete – tako na manjših kmetijah kot večjih obdelovalnih površinah – <strong>pri uvajanju preciznega in regenerativnega kmetijstva</strong>. Verjamemo, da ste prav vi ključni za boljšo prihodnost vseh nas, zato vam ponujamo <strong>znanje in podporo</strong>, ki razbremenita vaše delo, izboljšata finančni donos in omogočita pridelavo večje količine kakovostne hrane ob doslednem varovanju narave.</p>
            <p>Pri tem se opiramo na <strong>več kot 20 let izkušenj</strong>, ko smo z ramo ob rami s slovenskimi kmeti obdelovali vse tipe zemljišč – od poljščin in travinj do zahtevnih trajnih nasadov. Dobro vemo, da zemlja ne dopušča bližnjic, zato globoko poznavanje gnojenja in obdelave tal nadgrajujemo z najsodobnejšo tehnologijo. Ne ponujamo vam le storitev, temveč <strong>zanesljivo in dolgoročno partnerstvo</strong>, ki tradicijo združuje z napredkom. Skupaj z vami gradimo uspešno in konkurenčno kmetijo, kjer merljivi rezultati zagotavljajo prihodnost na vaših tleh.</p>
        </div>
    </div>
</section>

<!-- CONTACT SECTION -->
<section class="contact-section" id="kontakt">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title">Kontaktirajte nas</h2>
        </div>

        <div class="contact-form-grid fade-in">
            <form onsubmit="handleSubmit(event)" id="contactForm">
                <input type="hidden" name="access_key" value="d48cf0c9-69b4-4a70-a2ab-3a19ce9902aa">
                <input type="checkbox" name="botcheck" style="display:none">
                <div class="contact-cols">
                    <!-- Left column -->
                    <div class="contact-left">
                        <div class="form-group">
                            <label for="name">Ime in priimek<span class="form-required">*</span></label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">E-pošta<span class="form-required">*</span></label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Telefon</label>
                            <input type="tel" id="phone" name="phone" placeholder="+386 41 000 000">
                        </div>
                    </div>
                    <!-- Right column -->
                    <div class="contact-right">
                        <div class="form-group">
                            <label class="form-label-interest">Zanima me:</label>
                            <div class="contact-checkboxes">
                                <label class="checkbox-label">
                                    <input type="checkbox" name="interest" value="Analiza zemlje"> Analiza zemlje
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="interest" value="Gnojila in setvene mape"> Gnojila in setvene mape
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" name="interest" value="Svetovanje"> Svetovanje
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="message">Sporočilo</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <div id="formStatus" class="form-status"></div>
                        <button type="submit" id="submitBtn" class="btn-contact-submit">POŠLJI SPOROČILO</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
