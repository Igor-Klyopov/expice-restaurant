window.addEventListener('scroll', function () {
  if (this.scrollY > 100) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});
btn.onclick = function (click) {
  click.preventDefault();
  scrollTo(0, 400);
};
