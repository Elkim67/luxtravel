// main.js

// Initialisation de Swiper
const swiper = new Swiper('.swiper', {
  loop: true, // Boucle infinie
  slidesPerView: 1, // Affiche une seule slide par défaut
  spaceBetween: 30, // Espace entre les slides

  // Breakpoints pour la responsivité
  breakpoints: {
    768: {
      slidesPerView: 2, // 2 slides sur les écrans > 768px
    },
    1024: {
      slidesPerView: 3, // 3 slides sur les écrans > 1024px
    },
  },

  // Pagination, navigation arrows, etc. (facultatif)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Gestion du menu mobile
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Ferme le menu quand un lien est cliqué (pour mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Initialisation de ScrollReveal
// Assurez-vous que ScrollReveal est correctement lié dans votre HTML
ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true, // Les animations se répètent à chaque défilement
});

// Appliquez les animations à vos éléments
ScrollReveal().reveal('.header__content h1, .section__header', { origin: 'top' });
ScrollReveal().reveal('.header__content p, .header__btns, .section__description', { origin: 'bottom' });
ScrollReveal().reveal('.header__image, .destination__card, .journey__card, .discover__card, .client__card', { origin: 'left', interval: 100 });
ScrollReveal().reveal('.showcase__image, .showcase__content', { origin: 'right' });
ScrollReveal().reveal('.footer__col', { origin: 'top', interval: 100 });