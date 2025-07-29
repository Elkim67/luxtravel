// main.js

// Initialisation de Swiper pour les témoignages
const swiper = new Swiper('.client-swiper', { // Mis à jour le sélecteur
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30, // Augmenté l'espace pour une meilleure séparation
  grabCursor: true,

  // Pagination si vous voulez ajouter des points (ajoutez <div class="swiper-pagination">)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation si vous voulez ajouter des flèches (ajoutez .swiper-button-next/.prev)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// Gestion du menu de navigation mobile
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
  // Toggle la classe 'open' sur les liens de navigation au clic sur le bouton menu
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Ferme le menu de navigation mobile quand un lien est cliqué
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
    });
  });

  // Ferme le menu si la fenêtre est redimensionnée (pour le mode desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767 && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
}


// Initialisation de ScrollReveal pour les animations de défilement
// Réduction des délais pour une apparition plus rapide et plus dynamique
ScrollReveal({
  distance: '40px', // Distance de déplacement de l'élément (légèrement réduite)
  duration: 1000,   // Durée de l'animation en ms (réduite)
  delay: 80,       // Délai avant le début de l'animation (réduit)
  easing: 'ease-in-out',
  reset: true      // Réinitialise l'animation à chaque fois qu'elle sort de la vue
});

// Application des animations à différents éléments (sélecteurs mis à jour)
ScrollReveal().reveal('.navbar__header, .hero__subtitle', { origin: 'top' });
ScrollReveal().reveal('.hero__title, .section__title', { origin: 'left' });
ScrollReveal().reveal('.hero__actions, .section__description, .cta__actions', { origin: 'bottom' });
ScrollReveal().reveal('.package__image', { origin: 'right' });
ScrollReveal().reveal('.package__details, .contact__info', { origin: 'left' });
ScrollReveal().reveal('.contact__form-area', { origin: 'right' });


// Animations avec intervalle pour les grilles de cartes
ScrollReveal().reveal('.destination__card, .journey__card, .discover__card', {
  origin: 'bottom',
  interval: 80 // Délai entre chaque carte pour un effet d'escalier (réduit)
});

// Animation pour les témoignages clients
ScrollReveal().reveal('.client__card', { origin: 'top', interval: 60 }); // Délai réduit

// Animation pour les colonnes du pied de page
ScrollReveal().reveal('.footer__col', { origin: 'bottom', interval: 80 }); // Délai réduit