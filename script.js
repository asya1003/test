const button = document.querySelector(".burger-menu_button");
const menu = document.querySelector(".burger-menu");
const links = document.querySelector(".burger-menu_link");
const overlay = document.querySelector(".burger-menu_overlay");
 
button.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
links.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
 
function toggleMenu() {
    button.classList.toggle("active");
    menu.classList.toggle("active");
    links.classList.toggle("active");
    overlay.classList.toggle("active");
}

