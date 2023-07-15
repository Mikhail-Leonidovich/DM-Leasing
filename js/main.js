const sliderNotification = document.querySelectorAll('.slider__notification');
const sliderImage = document.querySelectorAll('.slider__slide');
let positionSlide = 0;
let interval;

const nextSlide = () => {
  sliderImage[positionSlide].className = 'slider__slide';
  positionSlide = ++positionSlide % sliderImage.length;
  sliderImage[positionSlide].className = 'slider__slide showing';
  handleChangeNotification(sliderNotification[positionSlide]);
}

const getCurrentSlide = () => {
  sliderImage.forEach((item) => {
    item.className = 'slider__slide';
  })
  sliderImage[positionSlide].className = 'slider__slide showing';

}

sliderNotification.forEach((item) => {
  item.addEventListener('click', () => {
    handleClickNotification(item);
  });
})

handleChangeNotification = (item) => {
  sliderNotification.forEach((elem) => {
    elem.id !== item.id ? elem.className = 'slider__notification' : item.classList.toggle('notification-active');
  });
}

handleClickNotification = (item) => {
  clearInterval(interval);
  handleChangeNotification(item);
  positionSlide = item.id - 1;
  getCurrentSlide();
  handleInterval();
}

handleInterval = () => {
  interval = setInterval(() => nextSlide(), 4000);
}

window.onload = () => {
  handleInterval();
}





