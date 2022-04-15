import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const body = document.body

const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__list");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
  menuOpened ? body.style.overflowY = "hidden" : body.style.overflowY = "auto";
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

const link = document.querySelectorAll('.menu-toggle');
link.forEach(el => {
  el.addEventListener('click', e => {
    if (menuOpened) {
      menuToggle()
    } 
  })
})

var advantagesSlider = new Swiper(".advantages__slider", {
  slidesPerView: "auto",
});