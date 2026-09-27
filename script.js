const menuButton=document.getElementById('menuButton');
const nav=document.getElementById('nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'✕':'☰'});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='☰'}));
const cards=document.querySelectorAll('.day-card');
const today=new Date().getDay();
if(today!==5)document.querySelector(`[data-day="${today}"]`)?.classList.add('active');
