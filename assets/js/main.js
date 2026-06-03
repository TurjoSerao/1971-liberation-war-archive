const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

// Toggle sidebar
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  // Change icon (hamburger ↔ close)
  menuToggle.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars-staggered"></i>';
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");

  menuToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
});

// Close when clicking menu links
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");

    menuToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
  });
});