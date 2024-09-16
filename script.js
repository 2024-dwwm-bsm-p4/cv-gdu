document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour gérer l'animation des "separators"
  function onIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  }

  const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.5,
  });

  const separators = document.querySelectorAll(".separator");
  separators.forEach((separator) => observer.observe(separator));

  // Gestion de l'affichage du menu hamburger
  const menuToggle = document.querySelector(".menu-toggle");
  const stickyNav = document.querySelector(".sticky-nav");

  menuToggle.addEventListener("click", function () {
    stickyNav.classList.toggle("active");
  });

  // Fermer le menu après un clic sur un lien
  document.querySelectorAll(".sticky-nav ul li a").forEach((link) => {
    link.addEventListener("click", function () {
      stickyNav.classList.remove("active");
    });
  });

  // Gestion du mode sombre
  const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

  toggleDarkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
