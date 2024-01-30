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