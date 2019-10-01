$(document).ready(function () {

    $('.slider_active').owlCarousel({
        loop: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //Jquery Popup
    $('.gallery-img').magnificPopup({
        type: 'image'
    });

    //Testimonial Area

    $('.active-testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.testimonial-images',
    });
    $('.testimonial-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.active-testimonial',
        dots: false,
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        variableWidth: true,
        useCSS: false,
        prevArrow: '<i class="fas fa-angle-left prev"></i>',
        nextArrow: '<i class="fas fa-angle-right next"></i>',

    });
});