

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var counter = 1;
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var slide1next = document.getElementById('slide1');
var slide2next = document.getElementById('slide2');
var slide3next = document.getElementById('slide3');
$('#slide1').attr("disabled", true);
$('#slide2').attr("disabled", true);
$('#slide3').attr("disabled", true);

function nextSlide() {
    goToSlide(currentSlide + 1);
    if(counter == 3) {
        visible(1);
        counter = 1;
    } else {
        visible(counter+1);
        counter++;
    }

    //$(".slide").animate({width:'toggle'},350);

}

function previousSlide() {
    //document.getElementById("demo").innerHTML = counter;
    goToSlide(currentSlide - 1);
    if(counter == 1) {
        visible(3);
        counter = 3;
    } else {
        visible(counter-1);
        counter--;
    }
    //$("#slide").animate({width: 'toggle'}, 350);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

function visible(n) {
    if (n == 1) {
        $('#slide3').attr("checked", false);
        $('#slide2').attr("checked", false);
        $('#slide1').attr("checked", true);
    } else if (n == 2) {
        $('#slide3').attr("checked", false);
        $('#slide1').attr("checked", false);
        $('#slide2').attr("checked", true);
    } else if (n == 3) {
        $('#slide1').attr("checked", false);
        $('#slide2').attr("checked", false);
        $('#slide3').attr("checked", true);
    }
}

next.onclick = function () {
    nextSlide();
};
previous.onclick = function () {
    previousSlide();
};