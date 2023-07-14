const sliderNotification = document.querySelectorAll('.slider__notification');
const sliderImage = document.querySelectorAll('.slider__slide');
let currentSlide = 0;

let nextSlide = () => {
  sliderImage[currentSlide].className = 'slider__slide';
  currentSlide = ++currentSlide % sliderImage.length;
  sliderImage[currentSlide].className = 'slider__slide showing';
  handleChangeNotification(sliderNotification[currentSlide]);
}

sliderNotification.forEach((item) => {
  item.addEventListener('click', () => {
    handleChangeNotification(item);
  });
})

handleChangeNotification = (item) => {
  item.classList.toggle('notification-active');

  sliderNotification.forEach((elem) => {
    elem.id !== item.id ? elem.className = 'slider__notification' : null;
  });
}


setInterval(nextSlide, 4000);






