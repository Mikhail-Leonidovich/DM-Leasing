const allTabsBtn = document.querySelectorAll('.tabs-btn');
const allCardsItem = document.querySelectorAll('.cards-item');
let currentTabs;

allTabsBtn.forEach((item) => {
  item.addEventListener('click', () => {
    handleChangeTabsClass(item);
    handleChangeTabsWindow();
  })
})

const handleChangeTabsClass = (item) => {
  currentTabs = item.id;
  allTabsBtn.forEach((elem) => {
    elem.id === currentTabs ? elem.classList.add('tabs-btn--active') : elem.classList.remove('tabs-btn--active');
  })
}

const handleChangeTabsWindow = () => {
  allCardsItem.forEach((elem) => {
    elem.id === currentTabs ? elem.classList.remove('cards-item--hide') : elem.classList.add('cards-item--hide');
  })
}

