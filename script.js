/* script.js */
// MENU HAMBURGUER
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', ()=>{
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
});

// FECHAR MENU AO CLICAR FORA
document.addEventListener('click',(e)=>{
if(!hamburger.contains(e.target) && !navMenu.contains(e.target)){
hamburger.classList.remove('active');
navMenu.classList.remove('active');
}
});

// SCROLL TRANSPARENTE HEADER
const header = document.getElementById('header');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>10);});

// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
if(localStorage.getItem('theme')==='dark'){
document.body.classList.add('dark');
themeIcon.src='assets/lua.png.png';
}else{
themeIcon.src='assets/sol.png.png';
}
themeToggle.addEventListener('click',()=>{
document.body.classList.toggle('dark');
if(document.body.classList.contains('dark')){
themeIcon.src='assets/lua.png.png';
localStorage.setItem('theme','dark');
}else{
themeIcon.src='assets/sol.png.png';
localStorage.setItem('theme','light');
}
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
reveals.forEach(el=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 50){el.classList.add('active');}
});
});

// NAV LINKS CLICK
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link=>{
link.addEventListener('click', ()=>{
navLinks.forEach(l=>l.classList.remove('active-link'));
link.classList.add('active-link');
hamburger.classList.remove('active');
navMenu.classList.remove('active');
});
});

// CARD TOUCH SELECTION
const cards = document.querySelectorAll('.product-card');
cards.forEach(card=>{
card.addEventListener('touchstart', ()=>{
cards.forEach(c=>c.classList.remove('selected'));
card.classList.add('selected');
});
});

// MODAL PRODUTOS
document.querySelectorAll('.ver-detalhes').forEach(btn=>{
btn.addEventListener('click',()=>{
const productId = btn.getAttribute('data-product');
const modal = document.getElementById(`modal${productId}`);
if(modal) modal.style.display='block';
});
});
document.querySelectorAll('.modal .close').forEach(span=>{
span.addEventListener('click',()=>{span.parentElement.parentElement.style.display='none';});
});
window.addEventListener('click',(e)=>{if(e.target.classList.contains('modal')){e.target.style.display='none';}});



