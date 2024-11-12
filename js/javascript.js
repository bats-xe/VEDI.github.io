const carouselContent = document.querySelector('.carousel-content');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
    carouselContent.style.transform = `translateX(-${index * 100}%)`;
}

// Cambiar al siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Cambiar al slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Cambio automático cada 5 segundos
setInterval(nextSlide, 5000);

// Eventos para flechas
rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);
