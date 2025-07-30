document.addEventListener("DOMContentLoaded", function () {
  // Example: Mobile nav toggle (if implemented)
  const toggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".site-nav");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
});
