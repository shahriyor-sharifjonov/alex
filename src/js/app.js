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

var programsSlider = new Swiper(".programs__slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  modules: [Navigation, Pagination],
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    prevEl: ".programs__prev",
    nextEl: ".programs__next",
  },
  pagination: {
    el: ".programs__pagination",
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

var aboutSlider = new Swiper(".about__slider-content", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  modules: [Navigation, Pagination],
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    prevEl: ".about__prev",
    nextEl: ".about__next",
  },
  pagination: {
    el: ".about__pagination",
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

var reviewsSlider = new Swiper(".reviews__slider-content", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  modules: [Navigation, Pagination],
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    prevEl: ".reviews__prev",
    nextEl: ".reviews__next",
  },
  pagination: {
    el: ".reviews__pagination",
    type: "fraction",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }
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

const thanksPopup = document.getElementById('thanks');

const checkThanksPopup = () => {
  body.style.overflowY = "hidden"
  if(thanksPopup.classList.contains('active')){
    let second = 5;
    setInterval(() => {
      if(second > 0 && thanksPopup.classList.contains('active')){
        second --;
        const event = thanksPopup.querySelector('.popup__event');
        event.innerHTML = `Форма закроется через ${second} секунд`
      }
      if(second == 0 && thanksPopup.classList.contains('active')){
        thanksPopup.classList.remove('active');
        body.style.overflowY = "auto"
        second = 5
      }
    }, 1000);
  }
}


// formPromotion 
const formPromotion = document.getElementById('promotionForm');
const formPromotionParent = formPromotion.parentElement.parentElement;
formPromotion.addEventListener('submit', formPromotionSend);
async function formPromotionSend(e) {
  e.preventDefault();
  let formData = new FormData(formPromotion);
  formPromotion.classList.add('sending');
  let response = await fetch('files/sendmail.php', {
    method: 'POST',
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    formPromotion.classList.add('success');
    formPromotion.classList.remove('sending');
    formPromotionParent.classList.remove('active');
    thanksPopup.classList.add('active');
    checkThanksPopup();
    formPromotion.reset();
  }else{
    alert("Ошибка");
    formPromotion.classList.remove('sending');
  }
}


// formKonsult 
const formKonsult = document.getElementById('konsultForm');
const formKonsultParent = formKonsult.parentElement.parentElement;
formKonsult.addEventListener('submit', formKonsultSend);
async function formKonsultSend(e) {
  e.preventDefault();
  let formData = new FormData(formKonsult);
  formKonsult.classList.add('sending');
  let response = await fetch('files/sendmail.php', {
    method: 'POST',
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    formKonsult.classList.add('success');
    formKonsult.classList.remove('sending');
    formKonsultParent.classList.remove('active');
    thanksPopup.classList.add('active');
    checkThanksPopup();
    formKonsult.reset();
  }else{
    alert("Ошибка"); 
    formKonsult.classList.remove('sending');
  }
}


// formDiscuss 
const formDiscuss = document.getElementById('discussForm');
const formDiscussParent = formDiscuss.parentElement.parentElement;
formDiscuss.addEventListener('submit', formDiscussSend);
async function formDiscussSend(e) {
  e.preventDefault();
  let formData = new FormData(formDiscuss);
  formDiscuss.classList.add('sending');
  let response = await fetch('files/sendmail.php', {
    method: 'POST',
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    formDiscuss.classList.add('success');
    formDiscuss.classList.remove('sending');
    formDiscussParent.classList.remove('active');
    thanksPopup.classList.add('active');
    checkThanksPopup();
    formDiscuss.reset();
  }else{
    alert("Ошибка"); 
    formDiscuss.classList.remove('sending');
  }
}


// formSeo 
const formSeo = document.getElementById('seoForm');
const formSeoParent = formSeo.parentElement.parentElement;
formSeo.addEventListener('submit', formSeoSend);
async function formSeoSend(e) {
  e.preventDefault();
  let formData = new FormData(formSeo);
  formSeo.classList.add('sending');
  let response = await fetch('files/sendmail.php', {
    method: 'POST',
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    formSeo.classList.add('success');
    formSeo.classList.remove('sending');
    formSeoParent.classList.remove('active');
    thanksPopup.classList.add('active');
    checkThanksPopup();
    formSeo.reset();
  }else{
    alert("Ошибка"); 
    formSeo.classList.remove('sending');
  }
}


// formPromotionTrafik 
const formPromotionTrafik = document.getElementById('promotionTrafikForm');
const formPromotionTrafikParent = formPromotionTrafik.parentElement.parentElement;
formPromotionTrafik.addEventListener('submit', formPromotionTrafikSend);
async function formPromotionTrafikSend(e) {
  e.preventDefault();
  let formData = new FormData(formPromotionTrafik);
  formPromotionTrafik.classList.add('sending');
  let response = await fetch('files/sendmail.php', {
    method: 'POST',
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    formPromotionTrafik.classList.add('success');
    formPromotionTrafik.classList.remove('sending');
    formPromotionTrafikParent.classList.remove('active');
    thanksPopup.classList.add('active');
    checkThanksPopup();
    formPromotionTrafik.reset();
  }else{
    alert("Ошибка"); 
    formPromotionTrafik.classList.remove('sending');
  }
}


// formCore 
const formCore = document.getElementById('coreForm');
const formCoreParent = formCore.parentElement.parentElement;
formCore.addEventListener('submit', formCoreSend);
async function formCoreSend(e) {
  e.preventDefault();
  let formData = new FormData(formCore);
  formCore.classList.add('sending');
  let response = await fetch('files/sendmail.php', {
    method: 'POST',
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    formCore.classList.add('success');
    formCore.classList.remove('sending');
    formCoreParent.classList.remove('active');
    thanksPopup.classList.add('active');
    checkThanksPopup();
    formCore.reset();
  }else{
    alert("Ошибка"); 
    formCore.classList.remove('sending');
  }
}


// formCalc 
const formCalc = document.getElementById('calcForm');
const formCalcParent = formCalc.parentElement.parentElement;
formCalc.addEventListener('submit', formCalcSend);
async function formCalcSend(e) {
  e.preventDefault();
  let formData = new FormData(formCalc);
  formCalc.classList.add('sending');
  let response = await fetch('files/sendmail.php', {
    method: 'POST',
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    formCalc.classList.add('success');
    formCalc.classList.remove('sending');
    formCalcParent.classList.remove('active');
    thanksPopup.classList.add('active');
    checkThanksPopup();
    formCalc.reset();
  }else{
    alert("Ошибка"); 
    formCalc.classList.remove('sending');
  }
}


// formQuests 
const formQuests = document.getElementById('questsForm');
const formQuestsParent = formQuests.parentElement.parentElement;
formQuests.addEventListener('submit', formQuestsSend);
async function formQuestsSend(e) {
  e.preventDefault();
  let formData = new FormData(formQuests);
  formQuests.classList.add('sending');
  let response = await fetch('files/sendmail.php', {
    method: 'POST',
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    formQuests.classList.add('success');
    formQuests.classList.remove('sending');
    formQuestsParent.classList.remove('active');
    thanksPopup.classList.add('active');
    checkThanksPopup();
    formQuests.reset();
  }else{
    alert("Ошибка"); 
    formQuests.classList.remove('sending');
  }
}


// formOnlineapp 
const formOnlineapp = document.getElementById('onlineappForm');
const formOnlineappParent = formOnlineapp.parentElement.parentElement;
formOnlineapp.addEventListener('submit', formOnlineappSend);
async function formOnlineappSend(e) {
  e.preventDefault();
  let formData = new FormData(formOnlineapp);
  formOnlineapp.classList.add('sending');
  let response = await fetch('files/sendmail.php', {
    method: 'POST',
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    formOnlineapp.classList.add('success');
    formOnlineapp.classList.remove('sending');
    formOnlineappParent.classList.remove('active');
    thanksPopup.classList.add('active');
    checkThanksPopup();
    formOnlineapp.reset();
  }else{
    alert("Ошибка"); 
    formOnlineapp.classList.remove('sending');
  }
}
