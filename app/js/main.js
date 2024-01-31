// Код для раздела Stages
let stagesCards = document.querySelectorAll('.stages__item');
let stagesLeftBtn = document.querySelector('.stages__left-btn');
let stagesRightBtn = document.querySelector('.stages__right-btn');
let stagesDontsElements = document.querySelectorAll('.stages__dots svg');

// Index текущего слайда
let currentStagesCard = 0;

// Сброс активного классов у карточек и у точек
function resetStagesClass() {
  // Сбрасывает активный класс со всех карточек
  stagesCards.forEach(item => item.classList.remove('stages__item-active'));
  // Сбрасывает активный класс со всех точек
  stagesDontsElements.forEach(item => item.classList.remove('stages__dots-active'));
};

// Установка активного класса для карточки и точки
function activeStagesClass(index) {
  // Ставим активный класс для выбранной карточки
  stagesCards[index].classList.add('stages__item-active');
  // Ставим активный класс для нажатой точки
  stagesDontsElements[index].classList.add('stages__dots-active');

  // Если точка первая, то стрелка влева неактивна
  stagesLeftBtn.disabled = index === 0;
  // Если точка последняя, то стрелка вправо неактивна
  stagesRightBtn.disabled = index === 4;
};

// Обработчик нажатых точек
stagesDontsElements.forEach((item, index) =>
  item.addEventListener('click', function () {
    resetStagesClass();
    activeStagesClass(index);
    // Заппоминаем index текущего слайда
    currentStagesCard = index;
  }));

// Обработчик левой кнопки
stagesLeftBtn.addEventListener('click', function () {
  currentStagesCard--;
  resetStagesClass();
  activeStagesClass(currentStagesCard);
});

// Обработчик правой кнопки
stagesRightBtn.addEventListener('click', function () {
  currentStagesCard++;
  resetStagesClass();
  activeStagesClass(currentStagesCard);
});

// Код для раздела Members
let membersLeftBtn = document.querySelector('#members__leftBtn');
let membersRightBtn = document.querySelector('#members__rightBtn');
let membersCurrentSlideElement = document.querySelector('#members__currentSlide');
let membersTotalSlideElement = document.querySelector('#members__totalSlide');
let membersSlideElements = document.querySelectorAll('.members__main-card');

// Индекс текущего слайда
let membersCurrentSlide = 0;

// Определяем количество слайдов
let membersTotalSlide = membersSlideElements.length;

// Количество слайдов, отображаемых одновременно
let slidesPerView = window.innerWidth <= 1200 ? 1 : 3;

// Выводим на страницу общее количество слайдов
membersTotalSlideElement.innerHTML = membersTotalSlide;

// Функция для обновления отображения карточек
function updateSlides() {
  // Скрываем все слайды
  membersSlideElements.forEach((slide) => slide.style.display = 'none');

  // Показываем нужное количество слайдов, начиная с текущего
  for (let i = membersCurrentSlide; i < membersCurrentSlide + slidesPerView; i++) {
    let adjustedIndex = i % membersTotalSlide; // Зацикливаем индексы слайдов
    membersSlideElements[adjustedIndex].style.display = 'block';
  }
};

// Функция для обновления текущего номера слайда
function updateCurrentSlide() {
  membersCurrentSlideElement.innerHTML = membersCurrentSlide + 1;
};

// Обработчик клика по кнопке влево
membersLeftBtn.addEventListener('click', function () {
  membersCurrentSlide = (membersCurrentSlide - slidesPerView + membersTotalSlide) % membersTotalSlide;
  updateCurrentSlide();
  updateSlides();
});

// Обработчик клика по кнопке вправо
membersRightBtn.addEventListener('click', function () {
  membersCurrentSlide = (membersCurrentSlide + slidesPerView) % membersTotalSlide;
  updateCurrentSlide();
  updateSlides();
});

// Автоматическое переключение слайдов каждые 4 секунды
setInterval(function () {
  membersCurrentSlide = (membersCurrentSlide + slidesPerView) % membersTotalSlide;
  updateCurrentSlide();
  updateSlides();
}, 4000);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  updateSlides();
  updateCurrentSlide();
});

// Обработчик изменения размера окна
window.addEventListener('resize', function () {
  // При изменении ширины экрана пересчитываем количество слайдов
  slidesPerView = window.innerWidth <= 1200 ? 1 : 3;
  membersCurrentSlide = 0; // Обнуляем текущий слайд
  updateSlides();
  updateCurrentSlide();
});
