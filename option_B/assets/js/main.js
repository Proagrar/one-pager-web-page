// Basic interactivity: menu, theme, form, chat
document.getElementById('year').textContent = new Date().getFullYear && (document.getElementById('year').textContent = new Date().getFullYear());

(function(){
  // menu toggle
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');
  menuBtn.addEventListener('click', function(){
    var open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    menuBtn.setAttribute('aria-expanded', String(!open));
  });

  // theme toggle and persistence
  var themeBtn = document.getElementById('theme-toggle');
  var key = 'acme_theme';
  try{
    var stored = localStorage.getItem(key);
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(stored === 'dark' || (!stored && prefersDark)) document.documentElement.setAttribute('data-theme','dark');
  }catch(e){}
  themeBtn && themeBtn.addEventListener('click', function(){
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
    try{ localStorage.setItem(key, isDark ? 'light' : 'dark'); }catch(e){}
    themeBtn.setAttribute('aria-pressed', String(!isDark));
  });

  // contact form simple handler
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    if(!name || !email){ status.textContent = 'Please include your name and email.'; return; }
    status.textContent = 'Sending…';
    // fallback: open mail client (replace with /api/leads)
    var subject = encodeURIComponent('Website contact: ' + name);
    var body = encodeURIComponent('Message from ' + name + '\n\n' + (form.message.value || ''));
    window.location.href = 'mailto:hello@acme.example?subject=' + subject + '&body=' + body;
  });

  // mailto button
  var mailto = document.getElementById('mailto');
  mailto && mailto.addEventListener('click', function(){ window.location.href = 'mailto:hello@acme.example'; });

  // simple chat toggle
  var chatOpen = document.getElementById('chat-open');
  var chatPanel = document.getElementById('chat-panel');
  var chatClose = document.getElementById('chat-close');
  if(chatOpen && chatPanel){
    chatOpen.addEventListener('click', function(){
      var open = chatPanel.classList.contains('open');
      chatPanel.classList.toggle('open');
      chatOpen.setAttribute('aria-expanded', String(!open));
      chatPanel.setAttribute('aria-hidden', String(open));
    });
    chatClose && chatClose.addEventListener('click', function(){
      chatPanel.classList.remove('open');
      chatOpen.setAttribute('aria-expanded','false');
      chatPanel.setAttribute('aria-hidden','true');
    });
  }

  // demo request
  var demo = document.getElementById('request-demo');
  demo && demo.addEventListener('click', function(){
    document.getElementById('contact').scrollIntoView({behavior:'smooth'}); document.getElementById('message').focus();
  });
})();