const menu = document.querySelector(".menu input");
const navbar = document.querySelector(".navbar ul");

menu.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});
