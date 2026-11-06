'use strict';
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');nav.classList.remove('is-open');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('is-open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
document.querySelector('#year').textContent=new Date().getFullYear();
const interest=document.querySelector('#interest');
function chooseInterest(value){if([...interest.options].some(o=>o.value===value))interest.value=value;}
document.querySelectorAll('[data-interest]').forEach(a=>a.addEventListener('click',()=>chooseInterest(a.dataset.interest)));
const cases={
eduvos:{label:'BRANDING EXAMPLES / EDUVOS & ALUMNI ASSOCIATION',title:'Everyday essentials. A lasting connection.',status:'BRANDING EXAMPLES / PRODUCT VISUALS',body:'Eduvos and Alumni Association branded products show how a shared identity can become part of everyday life. Bottles, apparel, laptop sleeves and power banks illustrate different ways to carry a brand.',second:'The idea behind the collection is simple: choose items people actually use, then bring the community’s identity into those everyday moments.',images:[],collections:[["Eduvos Alumni Association", "HOCO backpack, branded power banks, bottles, laptop sleeve and Alumni journals.", [["eduvos-alumni-engraved-stand.webp","Black adjustable phone stand with the Eduvos Alumni Association crest and Fueling Ambition engraving"],["eduvos-alumni-backpack.webp", "Grey HOCO Alumni Association backpack with Fueling Ambition branding"], ["eduvos-power-bank.webp", "White Alumni Association branded power bank"], ["alumni-olive-bottle.webp", "Olive Alumni Association bottle"], ["alumni-navy-bottle.webp", "Navy Alumni Association bottle"], ["eduvos-sleeve.webp", "Eduvos Alumni Association laptop sleeve"]]], ["Eduvos Corporate Gifting and Apparel", "Embroidered caps, 440 GSM hoodies, joggers, 720 ml bottles, tomtoc laptop sleeves and journals, alongside the corporate desk accessories shown below.", [["eduvos-apparel.webp", "Eduvos branded grey hoodie"], ["eduvos-corporate-phone-stand.webp", "Rotating desktop phone stand"], ["eduvos-corporate-cooling-stand.webp", "Dual-fan laptop cooling stand"], ["eduvos-corporate-laptop-sleeve.webp", "Executive laptop sleeve"], ["eduvos-corporate-water-bottle.webp", "Navy aluminium water bottle"], ["eduvos-corporate-keyboard-mouse.webp", "Wireless keyboard and mouse set"], ["eduvos-corporate-cleaning-kit.webp", "Device cleaning kit"]]]],note:'Eduvos and Alumni Association product visuals and mock-ups are shown as branding examples.',interest:'Corporate gifts & merchandise',cta:'Discuss your gifting brief'},
apparelConcepts:{"label": "CONCEPT DEVELOPMENT / APPAREL", "title": "Youth League & Volleyball Apparel", "status": "DIGITAL MOCK-UPS", "body": "Apparel concepts exploring crest placement, colour options and all-over sublimation for church youth groups and sports teams.", "second": "The ELCSA Youth League collection includes a blue starburst jersey and coordinated polos and V-neck shirts. The Flyballers collection shows a pink and navy volleyball jersey and polo from the front and back.", "images": [["youth-league-starburst.webp", "ELCSA Youth League blue starburst jersey"], ["youth-league-polos.webp", "ELCSA Youth League polos in navy, black and red"], ["youth-league-v-necks.webp", "ELCSA Youth League V-neck shirts in navy, black and red"], ["flyballers-jersey.webp", "Front and back views of the pink and navy Flyballers volleyball jersey"], ["flyballers-polo.webp", "Front and back views of the pink and navy Flyballers volleyball polo"]], "note": "Design mockups for concept development.", "interest": "Apparel & brand experiences", "cta": "Discuss your apparel concept"},
nwu:{label:'CONCEPT DEVELOPMENT / NWU STUDENT LIFE',title:'Built around belonging.',status:'PROPOSED / DIGITAL MOCK-UPS',body:'A proposed Student Life collection exploring how a campus identity can travel beyond campus. The concept brings coordinated branding to apparel, laptop sleeves, notebooks and pens, power banks and drinkware.',second:'This work explores product choices, logo placement and a cohesive collection. It is presented as a proposal, with final specifications and production subject to approval.',images:[['nwu-taupe-student-life-bottle.webp', 'Taupe NWU Student Life bottle with black branding'],['nwu-grey-hoodie.webp', 'Grey hoodie with purple NWU chest logo'],['nwu-black-student-life-bottle.webp', 'Black bottle with vertical purple NWU Student Life branding'],['nwu-matte-black-emblem-bottle.webp', 'Matte black bottle with a round purple NWU emblem'],['nwu-grey-joggers.webp', 'Grey joggers with purple NWU branding'],['nwu-notebook-pen-concept.webp','Proposed NWU grey notebook and pen set'],['nwu-power-bank-concept.webp','Proposed NWU white power bank'],['nwu-taupe-bottle-concept.webp','Proposed NWU Student Life taupe bottle'],['nwu-sleeve-concept.webp','Proposed NWU branded laptop sleeve'],['nwu-apparel-concept.webp','Proposed NWU Student Life hoodie'],['nwu-bottle-concept.webp','Proposed NWU Student Life bottle']],note:'These are proposed concepts, not completed or approved deliveries. No institutional endorsement is implied.',interest:'Apparel & brand experiences',cta:'Explore a collection for your team'},
approach:{label:'THE WORK BEHIND THE WORK',title:'A conversation is where it starts.',status:'THE TECHTRAY APPROACH',body:'I like to understand the people behind a brief: who the product is for, where it will be used and what a good result looks like. That makes the next steps clearer for everyone.',second:'<ol class="dialog-steps"><li><strong>Understand.</strong> Clarify the need, quantity, budget and timeline.</li><li><strong>Make it tangible.</strong> Source suitable products and develop branding visuals.</li><li><strong>Agree the details.</strong> Present a quotation and confirm the specifications.</li><li><strong>Follow through.</strong> Coordinate the order, delivery and after-sales enquiries.</li></ol>',images:[],note:'For retail clients, this can also mean a curated accessories range and display proposal. Each quotation is tailored to the store and its customers.',interest:'Business collaboration',cta:'Tell me what you have in mind'}
};
const dialog=document.querySelector('#project-dialog');
const dialogContent=document.querySelector('#dialog-content');
let lastTrigger=null;
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{
  const item=cases[button.dataset.case];if(!item)return;lastTrigger=button;
  const renderGallery=images=>images.length?'<div class="dialog-gallery'+(images.length>3?' concept-gallery':'')+'">'+images.map(([src,alt])=>'<img src="assets/'+src+'" alt="'+alt+'" loading="lazy">').join('')+'</div>':'';
  const gallery=item.collections?item.collections.map(([title,description,images])=>'<section><h3>'+title+'</h3><p>'+description+'</p>'+renderGallery(images)+'</section>').join(''):renderGallery(item.images);
  dialogContent.innerHTML='<div class="dialog-body"><p class="eyebrow">'+item.label+'</p><span class="dialog-status">'+item.status+'</span><h2 id="dialog-title">'+item.title+'</h2><p>'+item.body+'</p>'+(item.second.startsWith('<ol')?item.second:'<p>'+item.second+'</p>')+gallery+'<p class="dialog-note">'+item.note+'</p><a class="button" href="#contact" id="dialog-cta">'+item.cta+'<span aria-hidden="true">↗</span></a></div>';
  document.querySelector('#dialog-cta').addEventListener('click',()=>{chooseInterest(item.interest);dialog.close();});
  dialog.showModal();document.body.classList.add('modal-open');dialog.scrollTop=0;
}));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(lastTrigger)lastTrigger.focus({preventScroll:true});});
document.querySelector('#enquiry-form').addEventListener('submit',event=>{
  event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
  const name=form.elements.name.value.trim();const org=form.elements.organisation.value.trim();const brief=form.elements.brief.value.trim();
  const feedback=document.querySelector('#form-feedback');
  if(!name||!brief){feedback.textContent='Please add your name and a short note about your idea.';return;}
  const message='Hi Lainon, I found your personal website.\n\nMy name is '+name+(org?' from '+org:'')+'.\nI’d like to discuss: '+interest.value+'.\n\n'+brief;
  const url='https://wa.me/27662653887?text='+encodeURIComponent(message);
  const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';document.body.appendChild(link);link.click();link.remove();
  feedback.textContent='Your message is ready in WhatsApp. Review it there, then send when you’re ready.';
});

const forecourtViewer=document.querySelector('#forecourt-viewer');
if(forecourtViewer){
 let forecourtTrigger;
 document.querySelectorAll('.forecourt-image-link').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();forecourtTrigger=link;
  const image=link.querySelector('img');
  forecourtViewer.querySelector('img').src=link.href;
  forecourtViewer.querySelector('img').alt=image.alt;
  forecourtViewer.querySelector('p').textContent=image.alt;
  forecourtViewer.showModal();document.body.classList.add('modal-open');
 }));
 forecourtViewer.querySelector('button').addEventListener('click',()=>forecourtViewer.close());
 forecourtViewer.addEventListener('click',event=>{if(event.target===forecourtViewer)forecourtViewer.close();});
 forecourtViewer.addEventListener('close',()=>{document.body.classList.remove('modal-open');forecourtTrigger?.focus();});
}
