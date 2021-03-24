//  // Look for .hamburger
//   var menuBurgerButton = document.querySelector(".menu-burger-button");
//   // On click
//   menuBurgerButton.addEventListener("click", function() {
//     // Toggle class "is-active"
//     menuBurgerButton.classList.toggle("is-active");
//     // Do something else, like open/close menu
//   });

  (() => {
  const menuBtnRef = document.querySelector('[data-menu-burger-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener("click", () => {
    
  menuBtnRef.classList.toggle("is-open");

  mobileMenuRef.classList.toggle('is-open');
})
})();