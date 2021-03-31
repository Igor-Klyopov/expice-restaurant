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
    console.log('resize');
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

  document.querySelector('.scroll-left').addEventListener('click', function () {
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
  initialSlide: 3,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
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
  let direction = window.innerWidth <= 1089 ? 'vertical' : 'horizontal';

  return direction;
}
//--additional properties--//
function getspaceBetween() {
  let spaceBetween = window.innerWidth > 1091 ? 40 : 15;

  return spaceBetween;
}
//---------------------------------//
