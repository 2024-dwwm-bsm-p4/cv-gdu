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

  document
    .querySelector(".theme-switch__checkbox")
    .addEventListener("change", function () {
      console.log("Checkbox changed");
      document.body.classList.toggle("dark-mode");
      if (this.checked) {
        localStorage.setItem("darkMode", true);
        console.log("dark mode true");
      } else {
        localStorage.setItem("darkMode", false);
        console.log("dark mode false");
      }
    });

  // Vérifie l'état du mode sombre à partir du stockage local
  if (localStorage.getItem("darkMode") === "true") {
    console.log("Mode sombre activé au chargement");
    document.body.classList.add("dark-mode");
    document
    .querySelector(".theme-switch__checkbox").checked = true;
  }
  // Enregistre la préférence de l'utilisateur dans le stockage local
  const isDarkMode = document.body.classList.contains("dark-mode");
});

// Defilement doux
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
