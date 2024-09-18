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
    document.querySelector(".theme-switch__checkbox").checked = true;
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

// Texte à animer
const textArray = "Développeur web / web mobile";
let index = 0;
let isTyping = false;

// Fonction machine à écrire
function typeWriter() {
  if (index < textArray.length) {
    document.getElementById("text").textContent += textArray.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Délai entre chaque lettre
  } else {
    // Attendre 2 secondes avant de recommencer
    setTimeout(() => {
      resetTypeWriter();
    }, 2000);
  }
}

// Réinitialiser l'animation
function resetTypeWriter() {
  document.getElementById("text").textContent = "";
  index = 0;
  typeWriter();
}

// Intersection Observer pour vérifier la visibilité
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isTyping) {
        isTyping = true;
        typeWriter(); // Démarrer l'animation
      }
    });
  },
  { threshold: 0.1 }
); // Lancer lorsque 10% de l'élément est visible

// Observer l'élément de texte
observer.observe(document.getElementById("typewriter"));
