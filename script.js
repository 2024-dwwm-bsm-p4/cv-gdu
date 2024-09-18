document.addEventListener("DOMContentLoaded", function () {
  // "separators"
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

  // Hamburger menu display
  const menuToggle = document.querySelector(".menu-toggle");
  const stickyNav = document.querySelector(".sticky-nav");

  menuToggle.addEventListener("click", function () {
    stickyNav.classList.toggle("active");
  });

  // Closing the hamburger menu after click
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

  // Check the dark mode state from local storage
  if (localStorage.getItem("darkMode") === "true") {
    console.log("Mode sombre activé au chargement");
    document.body.classList.add("dark-mode");
    document.querySelector(".theme-switch__checkbox").checked = true;
  }
  // Save the user's preference in local storage
  const isDarkMode = document.body.classList.contains("dark-mode");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Text to animate
const textArray = "Développeur web / web mobile";
let index = 0;
let isTyping = false;

function typeWriter() {
  if (index < textArray.length) {
    document.getElementById("text").textContent += textArray.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      resetTypeWriter();
    }, 2000);
  }
}

function resetTypeWriter() {
  document.getElementById("text").textContent = "";
  index = 0;
  typeWriter();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isTyping) {
        isTyping = true;
        typeWriter(); 
      }
    });
  },
  { threshold: 0.1 }
); 

observer.observe(document.getElementById("typewriter"));
