document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du menu burger pour la navigation mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active'); // Ajoute/retire la classe 'active' pour afficher/masquer
            // Optionnel: Changer l'icône du burger
            // navToggle.textContent = navList.classList.contains('active') ? 'X' : '☰';
            navToggle.setAttribute('aria-expanded', navList.classList.contains('active'));
        });

        // Fermer le menu si un lien est cliqué (pour les ancres)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', false);
                    // navToggle.textContent = '☰'; // Réinitialiser l'icône si changée
                }
            });
        });
    }

    // 2. Mise à jour automatique de l'année dans le footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 3. (Optionnel) Ajout de la classe 'active' au lien de navigation correspondant à la section visible
    // Cela nécessite un peu plus de logique et est souvent géré par un Intersection Observer.
    // Pour l'instant, je vais donner un exemple simple.

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.3 // La section est considérée "active" quand 30% de sa surface est visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Supprimer la classe 'active' de tous les liens
                navLinks.forEach(link => link.classList.remove('active'));

                // Ajouter la classe 'active' au lien correspondant à la section visible
                const activeLink = document.querySelector(`.nav-list a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});