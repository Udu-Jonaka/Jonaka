  // Toggle mobile menu
  function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    var toggle = document.getElementById("nav-toggle");
    navLinks.classList.toggle("active");
    toggle.classList.toggle("active");
  }

  document
    .getElementById("nav-toggle")
    .addEventListener("click", toggleMenu);