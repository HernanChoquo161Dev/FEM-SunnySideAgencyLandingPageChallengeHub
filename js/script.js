const menuIcon = document.querySelector(".nav-page__menu-image");
const menu = document.querySelector(".nav-page__list");


menuIcon.addEventListener('click', function (event) {
    menu.classList.toggle("nav-page__list--hidden");
});