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