var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var slide1next = document.getElementById('slide1');
var slide2next = document.getElementById('slide2');
var slide3next = document.getElementById('slide3');


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
function slide1() {
    goToSlide(0);
    $("#slide").animate({width:'toggle'},350);
}
function slide2() {
    goToSlide(1);
    $("#slide").animate({width:'toggle'},350);
}
function slide3() {
    goToSlide(2);
    $("#slide").animate({width:'toggle'},350);
}

next.onclick = function () {
    nextSlide();
};
previous.onclick = function () {
    previousSlide();
};
slide1next.onclick = function () {
    slide1();
};
slide2next.onclick = function () {
    slide2();
};
slide3next.onclick = function () {
    slide3();
};