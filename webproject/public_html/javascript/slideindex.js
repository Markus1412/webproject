var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var next = document.getElementById('next');
var previous = document.getElementById('previous');

function nextSlide() {
    goToSlide(currentSlide + 1);
    $("#slide").animate({width:'toggle'},350);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
    $("#slide").animate({width:'toggle'},350);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

next.onclick = function () {
    nextSlide();
};
previous.onclick = function () {
    previousSlide();
};