document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-btn').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('open')
    });
});
$(function () {
    $('.bike__slider, .slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});