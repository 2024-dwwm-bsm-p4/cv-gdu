

document.addEventListener("DOMContentLoaded", function () {
    // Fonction qui sera appelée quand un "separator" entre ou sort de la fenêtre de visualisation
    function onIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Si l'élément est visible dans la fenêtre
                entry.target.classList.add('animate'); // Ajouter la classe pour déclencher l'animation
            } else { // Quand l'élément sort de la vue
                entry.target.classList.remove('animate'); // Retirer la classe pour que l'animation puisse être relancée
            }
        });
    }

    // Créer une nouvelle instance de l'Intersection Observer
    const observer = new IntersectionObserver(onIntersection, {
        threshold: 0.5 // Déclencher l'animation quand 50% de l'élément est visible
    });

    // Sélectionner tous les éléments avec la classe "separator"
    const separators = document.querySelectorAll('.separator');

    // Observer chaque "separator"
    separators.forEach(separator => observer.observe(separator));
});


// Sélectionne le bouton et ajoute un événement de clic
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    // Basculer la classe "dark-mode" sur le corps de la page
    document.body.classList.toggle('dark-mode');

    // Enregistrer le choix de l'utilisateur dans le stockage local
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Vérifier si l'utilisateur a déjà activé le mode sombre
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
// Gestion de l'affichage du menu hamburger
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('.sticky-nav');
    menu.classList.toggle('active'); // Ajoute ou retire la classe 'active'
});