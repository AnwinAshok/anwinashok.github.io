(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    $('#sendMessageButton').click(function() {
        var email = $('#email').val();
        var subject = "Enquiry From Website | " + $('#subject').val();
        var message = $('#message').val();
        var href = "mailto:info@arcadianssolutions.in?from=" + email + "&subject=" + subject + "&body=" + message;
        $(this).attr("href", href); 
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: false,
        nav : false,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

$("#nav a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();
 
    // store hash
    var hash = this.hash;
 
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
 
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
 
 });

 $(document).scroll(function() {
    if($(window).scrollTop() > 350){

    $(".navbar").css('transition', 'background 1s ease-in-out');
     $(".navbar").css("background","rgba( 0, 0, 0, 0.25 ) ");
     $("#nameImage").fadeIn('slow');
     $("#logoImage").fadeIn('slow');
     $("#header").fadeOut();
     $("#header2").fadeIn();

    }else if($(window).scrollTop() < 350){
        $(".navbar").css('transition', 'background 1s ease-in-out');
     $(".navbar").css("background","rgb(163 230 214)");
     $("#header2").fadeOut();
     $("#header").fadeIn();
     $("#nameImage").fadeOut('slow');
     $("#logoImage").fadeOut('slow');

    }
});
 