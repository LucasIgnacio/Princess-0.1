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

// ---- Vídeo de fundo da hero: respeita reduced-motion e pausa em aba oculta ----
(function initHeroVideo(){
  const heroVideo = document.querySelector('.hero-video');
  if (!heroVideo) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion){
    heroVideo.pause();
    heroVideo.removeAttribute('autoplay');
    return;
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden){
      heroVideo.pause();
    } else {
      heroVideo.play().catch(() => {});
    }
  });
})();

// ---- Carrossel responsivo (Tecnologias e selos) ----
(function initBadgeCarousel(){
  const carousel = document.getElementById('badgeCarousel');
  const track = document.getElementById('badgeTrack');
  const prevBtn = document.getElementById('badgePrev');
  const nextBtn = document.getElementById('badgeNext');
  const dotsWrap = document.getElementById('badgeDots');
  if (!carousel || !track || !prevBtn || !nextBtn || !dotsWrap) return;

  const slides = Array.from(track.children);
  let itemsPerView = 3;
  let currentPage = 0;

  function getItemsPerView(){
    const w = window.innerWidth;
    if (w <= 720) return 1;
    if (w <= 920) return 2;
    return 3;
  }

  function pageCount(){
    return Math.max(1, Math.ceil(slides.length / itemsPerView));
  }

  function buildDots(){
    dotsWrap.innerHTML = '';
    const total = pageCount();
    for (let i = 0; i < total; i++){
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Ir para o grupo ${i + 1}`);
      dot.addEventListener('click', () => goToPage(i));
      dotsWrap.appendChild(dot);
    }
  }

  function updateUI(){
    const total = pageCount();
    Array.from(dotsWrap.children).forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentPage);
    });
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === total - 1;
    const offset = currentPage * itemsPerView * (100 / itemsPerView);
    track.style.transform = `translateX(-${offset}%)`;
  }

  function goToPage(page){
    const total = pageCount();
    currentPage = Math.min(Math.max(page, 0), total - 1);
    updateUI();
  }

  function handleResize(){
    const newItemsPerView = getItemsPerView();
    if (newItemsPerView !== itemsPerView){
      itemsPerView = newItemsPerView;
      buildDots();
      currentPage = Math.min(currentPage, pageCount() - 1);
      updateUI();
    }
  }

  prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
  nextBtn.addEventListener('click', () => goToPage(currentPage + 1));

  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToPage(currentPage - 1);
    if (e.key === 'ArrowRight') goToPage(currentPage + 1);
  });

  // Swipe (touch) support
  let touchStartX = 0;
  let touchDeltaX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });
  track.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });
  track.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40){
      goToPage(touchDeltaX < 0 ? currentPage + 1 : currentPage - 1);
    }
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 150);
  });

  itemsPerView = getItemsPerView();
  buildDots();
  updateUI();
})();
