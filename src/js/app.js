import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

import IMask from 'imask';

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

var konsultphone = IMask(
  document.getElementById('konsultphone'), {
    mask: '+ {375} ( 00 ) - 000 - 00 - 00'
  }
);

var discussphone = IMask(
  document.getElementById('discussphone'), {
    mask: '+ {375} ( 00 ) - 000 - 00 - 00'
  }
);

const popups = document.querySelectorAll('.popup');

const popupOpen = document.querySelectorAll('.popup-open');
popupOpen.forEach(el => {
  el.addEventListener('click', () => {
    const target = el.getAttribute('data-target');
    const popup = document.querySelector(`#${target}`);
    popup.classList.add('active');
    body.style.overflowY = "hidden";
  })
})

const popupClose = document.querySelectorAll('.popup-close');
popupClose.forEach(el => {
  el.addEventListener('click', () => {
    popups.forEach(popup => popup.classList.remove('active'))
    body.style.overflowY = "auto"
  })
})