import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const swiper = new Swiper();

Swiper.use([Autoplay]);

import IMask from 'imask';

import $ from 'jquery';

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

var resultsSlider = new Swiper(".results__slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  modules: [Navigation, Pagination],
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    prevEl: ".results__prev",
    nextEl: ".results__next",
  },
  pagination: {
    el: ".results__pagination",
    type: "fraction",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

var commentsSlider = new Swiper(".comments__slider-content", {
  slidesPerView: 1,
  spaceBetween: 0,
  modules: [Navigation, Pagination],
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
  navigation: {
    prevEl: ".comments__prev",
    nextEl: ".comments__next",
  },
  pagination: {
    el: ".comments__pagination",
    type: "fraction",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 71,
    }
  }
});

var affectSlider = new Swiper(".affect__slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: false,
  initialSlide: 0,
  breakpoints: {
    578: {
      spaceBetween: 40,
    },
    1400: {
      centeredSlides: true,
      initialSlide: 1,
    }
  },
});

commentsSlider.on('slideChange', () => {
  const el = document.querySelector('.comments__text-content');
  const index_currentSlide = commentsSlider.realIndex;
  const currentSlide = commentsSlider.slides[index_currentSlide]
  const text = currentSlide.querySelector('div').getAttribute('data-value');
  el.innerHTML = text;
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

var promotionphone = IMask(
  document.getElementById('promotionphone'), {
    mask: '+ {375} ( 00 ) - 000 - 00 - 00'
  }
);

var onlineappphone = IMask(
  document.getElementById('onlineappphone'), {
    mask: '+ {375} ( 00 ) - 000 - 00 - 00'
  }
);

var promotionTrafikphone = IMask(
  document.getElementById('promotionTrafikphone'), {
    mask: '+ {375} ( 00 ) - 000 - 00 - 00'
  }
);

var seophone = IMask(
  document.getElementById('seophone'), {
    mask: '+ {375} ( 00 ) - 000 - 00 - 00'
  }
);

var corephone = IMask(
  document.getElementById('corephone'), {
    mask: '+ {375} ( 00 ) - 000 - 00 - 00'
  }
);

var questsphone = IMask(
  document.getElementById('questsphone'), {
    mask: '+ {375} ( 00 ) - 000 - 00 - 00'
  }
);

var calcphone = IMask(
  document.getElementById('calcphone'), {
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

$(document).ready(function() {
  $(".accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion__content")
        .slideUp(200);
    } else {
      $(".accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this)
        .siblings(".accordion__content")
        .slideDown(200);
    }
  });
});

const range = document.getElementById("range");
const pages = document.getElementById("pages");
pages.innerHTML = range.value;

range.oninput = function() {
  pages.innerHTML = this.value;
}

const store = document.getElementById('store');
const service = document.getElementById('service');
const katalog = document.getElementById('katalog');
const blog = document.getElementById('blog');
const landing = document.getElementById('landing');

const ageNew = document.getElementById('new');
const ageOld = document.getElementById('old');

const moskow = document.getElementById('moskow');
const russia = document.getElementById('russia');
const belarus = document.getElementById('belarus');
const west = document.getElementById('west');

const programmer = document.getElementById('programmer');
const copyrighter = document.getElementById('copyrighter');
const links = document.getElementById('links');
const filter = document.getElementById('filter');

const priceEl = document.getElementById('price');
let price = 0;

const calc = e => {
  price = 0;

  // Сколько лет вашему сайту?
  if (ageNew.checked) {price = 20000;}
  if (ageOld.checked) {price = 15000;}

  // Какой у вас сайт?
  if (e.target == store || e.target == katalog || e.target == blog){
    range.removeAttribute('disabled');
    range.setAttribute('min', 50);
    range.setAttribute('max', 300000);
    range.setAttribute('step', 50);
    range.value = range.getAttribute('min');
    range.classList.remove('disabled');
    pages.innerHTML = range.value;
  }if (e.target == service) {
    range.removeAttribute('disabled');
    range.setAttribute('min', 1);
    range.setAttribute('max', 500);
    range.setAttribute('step', 1);
    range.value = range.getAttribute('min');
    range.classList.remove('disabled');
    pages.innerHTML = range.value;
  }if (e.target == landing) {
    range.setAttribute('disabled', true);
    range.setAttribute('min', 1);
    range.setAttribute('max', 1);
    range.value = range.getAttribute('min');
    range.classList.add('disabled');
    pages.innerHTML = range.value;
  }
  if(store.checked || katalog.checked){price = price * 1.5}
  if(service.checked || blog.checked){price = price * 1}
  if(landing.checked){price = price * 2}

  // На какой регион нужно продвигать сайт? 
  if (moskow.checked){price += 10000}
  if (russia.checked){price += 5000}
  if (belarus.checked){price = price * 1}
  if (west.checked){price = price * 3}

  // Пречее
  programmer.checked ? price = price * 1 : price += 5000
  copyrighter.checked ? price = price * 1 : price = price * 1.05
  links.checked ? price += 5000 : price = price * 1
  filter.checked ? price += 15000 : price = price * 1

  // Количестао страниц
  if (range.value < 3000) price += range.value * 1
  if (range.value >= 3000) price += range.value * 1.1
  if (range.value >= 10000) price += range.value * 1.2
  if (range.value >= 100000) price += range.value * 1.3
  if (range.value >= 300000) price += range.value * 1.5

  priceEl.value = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' руб.'
}

const inputs = document.querySelectorAll('.calc__event');
inputs.forEach(el => {
  el.addEventListener('input', calc)
})
