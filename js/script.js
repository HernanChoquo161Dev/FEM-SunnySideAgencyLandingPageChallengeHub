const menuIcon = document.querySelector(".menu-layout__image");
const menu = document.querySelector(".menu-layout__list");


menuIcon.addEventListener('click', function (event) {
    menu.classList.toggle("menu-layout__list--hidden");
    menu.classList.toggle("menu-layout__list--animation");
});