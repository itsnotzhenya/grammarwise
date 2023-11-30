const body = document.querySelector('body');
const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuItems = document.querySelectorAll('#mobile-menu li');

burgerMenu.addEventListener('click', function () {
  body.classList.toggle('noscroll');
  burgerMenu.classList.toggle('close');
  mobileMenu.classList.toggle('overlay');
});

menuItems.forEach((item) =>
  item.addEventListener('click', function () {
    body.classList.toggle('noscroll');
    burgerMenu.classList.toggle('close');
    mobileMenu.classList.toggle('overlay');
  })
);
