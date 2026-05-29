const targets = document.querySelectorAll('.target')

const makeVisible = function (target) {
    let yellowBG = document.querySelector(`#ybg${target.target.id}`)
    yellowBG.classList.add('yellowBGOnAction')
}

const makeHidden = function (target) {
    let yellowBG = document.querySelector(`#ybg${target.target.id}`)
    yellowBG.classList.remove('yellowBGOnAction')
}

targets.forEach(target => target.addEventListener('mouseover', makeVisible))

targets.forEach(target => target.addEventListener('mouseout', makeHidden))

// слайдер
const wrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;
const totalSlides = slides.length;
let autoSlideInterval;

// 1. Создание точек (индикаторов)
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// 2. Функция обновления слайдера
function updateSlider() {
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// 3. Переход к конкретному слайду
function goToSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  updateSlider();
  resetTimer();
}

// 4. Автопрокрутка
function startTimer() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 4000); // смена каждые 4 секунды
}

function resetTimer() {
  clearInterval(autoSlideInterval);
  startTimer();
}

// 5. Обработчики кнопок
prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

// Запуск слайдера
startTimer();

// слайдер