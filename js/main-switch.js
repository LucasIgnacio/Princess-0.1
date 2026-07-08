// ---- Alternância de tema claro/escuro ----
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const STORAGE_KEY = 'mp-theme';

const savedTheme = localStorage.getItem(STORAGE_KEY);
if (savedTheme === 'light' || savedTheme === 'dark') {
  root.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem(STORAGE_KEY, next);
});

// ---- Header some ao rolar para baixo, reaparece ao rolar para cima ----
const siteHeader = document.getElementById('siteHeader');
let lastScrollY = window.pageYOffset;
window.addEventListener('scroll', () => {
  const currentY = window.pageYOffset;
  if (currentY > lastScrollY && currentY > 100){
    siteHeader.classList.add('nav-hidden');
  } else {
    siteHeader.classList.remove('nav-hidden');
  }
  lastScrollY = currentY <= 0 ? 0 : currentY;
}, { passive: true });

// ---- Menu mobile ----
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll('.reveal, .card, .badge');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));
