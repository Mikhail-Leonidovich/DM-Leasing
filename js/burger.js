const burgerBtn = document.querySelector('.burger-menu__btn');
const headerMenuList = document.querySelector('.header-menu__list');

burgerBtn.addEventListener('click', () => {
  handleOpenBurgerMenu();
})

const handleOpenBurgerMenu = () => {
  burgerBtn.classList.toggle('burger-menu__btn--active');
  burgerBtn.className === 'burger-menu__btn burger-menu__btn--active' ? headerMenuList.className = 'header-menu__list header-menu__list--active' : headerMenuList.className = 'header-menu__list header-menu__list--inactive';
}
