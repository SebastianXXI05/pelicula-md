const menu = document.querySelector('.header__menu');
const btnMenu = document.querySelector('#header__btn');
const trailer = document.querySelector('.trailer');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-activate');
  
  if(menu.classList.item(1) == null) {
    trailer.style.opacity = '1';
  }
  else {
    trailer.style.opacity = '0';
  }
});