//open/close main-manu (mobile, tablet)
(() => {
  const menuBtnRef = document.querySelector('[data-menu-burger-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');

    mobileMenuRef.classList.toggle('is-open');
  });
})();

//scroll slider-show in section hero
(() => {
  const sliderItems = document.querySelectorAll('.hero-slider-show-image');
  const sliderLine = document.querySelector('.hero-slider-show-track');
  let count = 0;
  let width;

  function init() {
    width = document.querySelector('.hero-slider-show-container').offsetWidth;
    sliderLine.style.width = width * sliderItems.length + 'px';
    sliderItems.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });
    rollSlider();
  }

  init();
  window.addEventListener('resize', init);

  document.querySelector('.scroll-right').addEventListener('click', () => {
    count += 1;
    if (count >= sliderItems.length) {
      count = 0;
    }
    rollSlider();
  });

  document.querySelector('.scroll-left').addEventListener('click', () => {
    count -= 1;
    if (count < 0) {
      count = sliderItems.length - 1;
    }
    rollSlider();
  });

  function rollSlider() {
    sliderLine.style.transform = `translate3d(-${count * width}px, 0px, 0px)`;
  }
})();

//slider-show control in section restaurants
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  loop: true,
  direction: getDirection(),
  //--additional properties--//
  spaceBetween: getspaceBetween(),
  autoHeight: true,
  initialSlide: 1,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-slide',
  },

  a11ly: {
    enablet: true,
    nextSlideMessage: 'Next slide',
  },
  //---------------------------------//
  navigation: {
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  let windowWidth = window.innerWidth;
  let direction = window.innerWidth < 768 ? 'vertical' : 'horizontal';

  return direction;
}
//--additional properties--//
function getspaceBetween() {
  let spaceBetween = window.innerWidth > 320 ? 20 : 5;

  return spaceBetween;
}

//---------------------------------//

//main-menu links page smooth scroll
const mainMenuLinksRef = document.querySelectorAll('.main-menu-link');

mainMenuLinksRef.forEach(link => link.addEventListener('click', clickHandler));

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}
