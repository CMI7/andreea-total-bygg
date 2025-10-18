const TRANSLATIONS = {
  sv: {
    nav:{home:'Hem',services:'Tjänster',gallery:'Galleri',about:'Om oss',quote:'Offert'},
    hero:{title:'Bygg & renovering i Stockholm med fokus på kvalitet',subtitle:'Invändiga renoveringar, fasader, tak, väggar, snickeri, hus och garage — levererat i tid med noggrannhet.',cta1:'Begär offert',cta2:'Kontakta oss'},
    services:{title:'Våra tjänster',items:[
      ['Invändig renovering','Kök/badrum, målning, golv, gips, öppningar och planlösning.'],
      ['Fasadrenovering','Puts, målning, tilläggsisolering och reparationer.'],
      ['Takarbeten','Nyläggning, omläggning, plåt- och tätskikt.'],
      ['Väggar & konstruktion','Regelväggar, förstärkningar och innerväggar.'],
      ['Snickeri / Träarbete','Dörrar, fönster, lister och speciallösningar i trä.'],
      ['Hus- & garagebyggnation','Från grund till färdigt — nybyggen och tillbyggnader.']
    ]},
    gallery:{title:'Galleri från våra projekt'},
    about:{title:'Om Andreea Total Bygg AB',text:'Vi är ett engagerat byggteam baserat i Stockholm. Vi arbetar effektivt, säkert och med tydlig kommunikation. Vårt mål är att göra processen enkel och transparent för dig som kund.'},
    quote:{title:'Begär offert / kostnadsförslag',name:'Namn',phone:'Telefon',email:'E-post',service:'Typ av arbete',message:'Beskrivning',consent:'Jag godkänner att mina uppgifter används för att kontakta mig angående denna förfrågan.',submit:'Skicka förfrågan'},
    contact:{title:'Kontakt',address:'Adress',email:'E-post',phone:'Telefon'},
    quick:'Snabblänkar',rights:'Alla rättigheter förbehållna'
  },
  en: {
    nav:{home:'Home',services:'Services',gallery:'Gallery',about:'About',quote:'Quote'},
    hero:{title:'Construction & renovation in Stockholm, built on quality',subtitle:'Interiors, facades, roofing, walls, carpentry, houses and garages — delivered on time with care.',cta1:'Request a quote',cta2:'Contact us'},
    services:{title:'Our Services',items:[
      ['Interior renovations','Kitchens/bathrooms, painting, flooring, drywall, openings and layout changes.'],
      ['Facade works','Rendering, painting, added insulation and repairs.'],
      ['Roofing','New roofs, re-roofing, sheet metal and waterproofing.'],
      ['Walls & framing','Stud walls, reinforcements and interior partitions.'],
      ['Carpentry / Joinery','Doors, windows, trims and custom woodwork.'],
      ['House & garage construction','From foundation to finish — new builds and extensions.']
    ]},
    gallery:{title:'Project gallery'},
    about:{title:'About Andreea Total Bygg AB',text:'We are a dedicated construction team based in Stockholm. We work efficiently, safely and with clear communication.'},
    quote:{title:'Request a quote / estimate',name:'Name',phone:'Phone',email:'Email',service:'Type of work',message:'Description',consent:'I agree that my data will be used to contact me regarding this request.',submit:'Send request'},
    contact:{title:'Contact',address:'Address',email:'Email',phone:'Phone'},
    quick:'Quick links',rights:'All rights reserved'
  },
  ro: {
    nav:{home:'Acasă',services:'Servicii',gallery:'Galerie',about:'Despre',quote:'Ofertă'},
    hero:{title:'Construcții și renovări în Stockholm, cu accent pe calitate',subtitle:'Renovări interioare, fațade, acoperișuri, pereți, tâmplărie, case și garaje — livrate la timp și cu grijă.',cta1:'Cere ofertă',cta2:'Contactează-ne'},
    services:{title:'Serviciile noastre',items:[
      ['Renovări interioare','Bucătării/băi, zugrăveli, pardoseli, gips-carton, deschideri și recompartimentări.'],
      ['Fațade','Tencuieli, vopsitorii, termoizolații și reparații.'],
      ['Acoperișuri','Montaj/renovare, tablă și hidroizolații.'],
      ['Pereți & structuri','Pereți despărțitori, ranforsări și compartimentări.'],
      ['Tâmplărie / Dulgherie','Uși, ferestre, plinte și soluții personalizate din lemn.'],
      ['Construcții case & garaje','De la fundație la finisaje — construcții noi și extinderi.']
    ]},
    gallery:{title:'Galerie proiecte'},
    about:{title:'Despre Andreea Total Bygg AB',text:'Suntem o echipă dedicată de construcții din Stockholm. Lucrăm eficient, în siguranță și cu comunicare clară.'},
    quote:{title:'Cere ofertă / deviz',name:'Nume',phone:'Telefon',email:'E-mail',service:'Tipul lucrării',message:'Descriere',consent:'Sunt de acord ca datele mele să fie folosite pentru a fi contactat pentru această solicitare.',submit:'Trimite cererea'},
    contact:{title:'Contact',address:'Adresă',email:'E-mail',phone:'Telefon'},
    quick:'Linkuri rapide',rights:'Toate drepturile rezervate'
  }
};

const CONTACT = {
  email:'andreeatotalbygg@gmail.com',
  phone:'+46763073630',
  address:'Lagmansvägen 5B, 152 40 Södertälje, Stockholms län'
};

let lang = 'sv';

function setLang(l){ lang=l; localStorage.setItem('lang', l); render(); }
function mailtoSubject(){ return 'Andreea Total Bygg AB – ' + TRANSLATIONS[lang].quote.title; }

function render(){
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i=nav-home]').forEach(el=>el.textContent=t.nav.home);
  document.querySelectorAll('[data-i=nav-services]').forEach(el=>el.textContent=t.nav.services);
  document.querySelectorAll('[data-i=nav-gallery]').forEach(el=>el.textContent=t.nav.gallery);
  document.querySelectorAll('[data-i=nav-about]').forEach(el=>el.textContent=t.nav.about);
  document.querySelectorAll('[data-i=nav-quote]').forEach(el=>el.textContent=t.nav.quote);
  document.getElementById('hero-title').textContent=t.hero.title;
  document.getElementById('hero-sub').textContent=t.hero.subtitle;
  document.getElementById('cta1').textContent=t.hero.cta1;
  document.getElementById('cta2').textContent=t.hero.cta2;
  document.getElementById('services-title').textContent=t.services.title;
  const list=document.getElementById('services-list'); list.innerHTML='';
  t.services.items.forEach(([title,desc])=>{
    const card=document.createElement('div'); card.className='card';
    card.innerHTML=`<h3 style="margin:0 0 6px 0">${title}</h3><p class="muted" style="margin:0">${desc}</p>`;
    list.appendChild(card);
  });
  document.getElementById('gallery-title').textContent=t.gallery.title;
  document.getElementById('about-title').textContent=t.about.title;
  document.getElementById('about-text').textContent=t.about.text;
  document.getElementById('quote-title').textContent=t.quote.title;
  document.getElementById('label-name').textContent=t.quote.name;
  document.getElementById('label-phone').textContent=t.quote.phone;
  document.getElementById('label-email').textContent=t.quote.email;
  document.getElementById('label-service').textContent=t.quote.service;
  document.getElementById('label-message').textContent=t.quote.message;
  document.getElementById('label-consent').textContent=t.quote.consent;
  document.getElementById('submit').value=t.quote.submit;
  document.getElementById('contact-title').textContent=t.contact.title;
  document.getElementById('contact-address-title').textContent=t.contact.address;
  document.getElementById('contact-email-title').textContent=t.contact.email;
  document.getElementById('contact-phone-title').textContent=t.contact.phone;
  document.getElementById('quick-links').textContent=t.quick;
  document.getElementById('rights').textContent = `© ${new Date().getFullYear()} Andreea Total Bygg AB. ${t.rights}.`;
  document.getElementById('btn-sv').classList.toggle('active', lang==='sv');
  document.getElementById('btn-en').classList.toggle('active', lang==='en');
  document.getElementById('btn-ro').classList.toggle('active', lang==='ro');
}

function mailtoFromForm(e){
  e.preventDefault();
  const f=e.target, t=TRANSLATIONS[lang].quote;
  const lines=[
    `${t.name}: ${f.name.value}`,
    `${t.phone}: ${f.phone.value}`,
    `${t.email}: ${f.email.value}`,
    `${t.service}: ${f.service.value}`,
    `${t.message}:`,
    f.message.value
  ].join('\n');
  const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(mailtoSubject())}&body=${encodeURIComponent(lines)}`;
  window.location.href=href;
}

window.addEventListener('DOMContentLoaded',()=>{
  const saved = localStorage.getItem('lang'); if(saved && TRANSLATIONS[saved]) lang=saved;
  render();
  document.getElementById('contact-address').textContent=CONTACT.address;
  document.getElementById('contact-email').textContent=CONTACT.email;
  document.getElementById('contact-email').href=`mailto:${CONTACT.email}`;
  document.getElementById('contact-phone').textContent=CONTACT.phone;
  document.getElementById('contact-phone').href=`tel:${CONTACT.phone}`;
  document.getElementById('quote-form').addEventListener('submit', mailtoFromForm);
});