$(document).ready(function () {
    $("a[href^='#']:not([href='#'])").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 100);
    });
});




$('.single-item').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
});






$('.ba-mslider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    slide: ('.ba-mslide'),
    responsive: [{
        breakpoint: 520,
        settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        },
        breakpoint: 1024,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            slidesPerRow:2,
            rows:2
        }
    }, ]
});







$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() != 0) {

            $('.ba-to-top').fadeIn();

        } else {

            $('.ba-to-top').fadeOut();

        }

    });

    $('.ba-to-top').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 200);

    });

});

var burgerButton = document.querySelector('.ba-burger-menu-open'),
    burgerCloseButton = document.querySelector('.ba-burger-menu-close'),
    menuToggle = document.querySelector('.ba-menu-mob'),
    body = document.getElementsByTagName('body')[0];

burgerButton.addEventListener('click', function () {
    menuToggle.classList.add('ba-show');
    body.classList.add('ba-del-srcoll');
});

burgerCloseButton.addEventListener('click', function () {
    menuToggle.classList.remove('ba-show');
    body.classList.remove('ba-del-srcoll');
});

var mobUl = document.querySelectorAll('.ba-menu-mob a');
//console.log(mobUl);

mobUl.forEach(function (item) {
    item.addEventListener('click', function () {
        menuToggle.classList.remove('ba-show');
        body.classList.remove('ba-del-srcoll');
    });
});