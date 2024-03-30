document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const navbar = document.querySelector(".navbar-list");
  const overlay = document.querySelector(".overlay");

  menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show");
    overlay.classList.toggle("show");
  });
});
