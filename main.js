// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de Swiper pour les témoignages
    const swiper = new Swiper('.client-swiper', {
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
    // SÉLECTEURS MIS À JOUR POUR CORRESPONDRE À VOTRE HTML
    const menuBtn = document.getElementById('menu-btn'); // Cible l'ID 'menu-btn'
    const navLinks = document.getElementById('navbar-links'); // Cible l'ID 'navbar-links'

    if (menuBtn && navLinks) {
        // Toggle la classe 'open' sur les liens de navigation au clic sur le bouton menu
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            // Optionnel: ajouter/retirer une classe au bouton lui-même pour l'animation (ex: transformation en X)
            // menuBtn.classList.toggle('active');
        });

        // Ferme le menu de navigation mobile quand un lien est cliqué
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    // Si vous avez ajouté une classe au bouton:
                    // menuBtn.classList.remove('active');
                }
            });
        });

        // Ferme le menu si la fenêtre est redimensionnée (pour le mode desktop)
        // Ceci est important pour s'assurer que le menu ne reste pas "ouvert" si l'utilisateur redimensionne
        // de mobile à desktop sans avoir fermé le menu.
        window.addEventListener('resize', () => {
            // Utilisez la même valeur que votre @media query CSS pour les breakpoints (ex: 767px)
            if (window.innerWidth > 767 && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                // Si vous avez ajouté une classe au bouton:
                // menuBtn.classList.remove('active');
            }
        });
    }


    // Initialisation de ScrollReveal pour les animations de défilement
    // Réduction des délais pour une apparition plus rapide et plus dynamique
    ScrollReveal({
        distance: '40px', // Distance de déplacement de l'élément (légèrement réduite)
        duration: 1000,   // Durée de l'animation en ms (réduite)
        delay: 80,        // Délai avant le début de l'animation (réduit)
        easing: 'ease-in-out',
        reset: true       // Réinitialise l'animation à chaque fois qu'elle sort de la vue
    });

    // Application des animations à différents éléments (sélecteurs mis à jour)
    // IMPORTANT : Le sélecteur '.navbar__header' cible la div à l'intérieur de <nav class="navbar">
    // Si votre header de navigation principal a une autre classe, ajustez-la ici.
    ScrollReveal().reveal(' .hero__subtitle', { origin: 'top' });
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
});