$(document).ready(function () {
    $(function () {
        AOS.init();
    });
});


$(document).ready(function () {
    $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
    $(".faq-question").on("click", function () {
        if ($(this).parent().hasClass("active")) {
            $(this).next().slideUp();
            $(this).parent().removeClass("active");
        }
        else {
            $(".faq-answer").slideUp();
            $(".faq-singular").removeClass("active");
            $(this).parent().addClass("active");
            $(this).next().slideDown();
        }
    });
});

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
        loop: false,
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


// $('.moreless-button').click(function() {
//     $('.moretext').slideToggle();
//     if ($('.moreless-button').text() == "Less") {
//       $(this).text("More")
//     } else {
//       $(this).text("Less")
//     }
//   });


// counter section start
// number count for stats, using jQuery animate

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });
  
