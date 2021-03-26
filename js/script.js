//open/close main-manu (mobile, tablet)
(() => {
  const menuBtnRef = document.querySelector('[data-menu-burger-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener("click", () => {
    
  menuBtnRef.classList.toggle("is-open");

  mobileMenuRef.classList.toggle('is-open');
})
})();

//scroll slider-show in section hero
(() => {
const images = document.querySelectorAll('.hero-slider-show-image');
const sliderLine = document.querySelector('.hero-slider-show-track');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.hero-slider-show-container').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.scroll-right').addEventListener('click', () => {
    count+=1;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.scroll-left').addEventListener('click', function () {
    count-=1;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = `translate3d(-${count * width}px, 0px, 0px)`;
  }
})();