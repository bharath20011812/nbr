$(function () {
    $(".clients-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        autoplay: false,
        dots: true,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>'
        ]

    });

    $(".landmark-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: true,
        autoplay: false,
        dots: true,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>'
        ]

    });

    $(".hillview-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: true,
        autoplay: false,
        dots: true,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>'
        ]

    });

    $(".leadership-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        autoplay: false,
        dots: true,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>'
        ]

    });

});