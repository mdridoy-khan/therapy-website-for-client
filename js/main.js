(function ($) {
"use strict";


 /*---------------------------------------------------------------------------------------
    Magnific popup Active
-----------------------------------------------------------------------------------------*/
    // video popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });


/*---------------------------------------------------------------------------------------
    Mean Menu Active
-----------------------------------------------------------------------------------------*/
    // Mobile-menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767",
        meanRevealPositionDistance: "0",
    });
/*---------------------------------------------------------------------------------------
    Data Background Active
-----------------------------------------------------------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
/*---------------------------------------------------------------------------------------
    Sticky Header Active
-----------------------------------------------------------------------------------------*/
    // sticky Header layout 1
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky").removeClass("sticky");
        } else {
          $("#header-sticky").addClass("sticky");
        }
    }); 
	



/*---------------------------------------------------------------------------------------
    slider all section
-----------------------------------------------------------------------------------------*/  

    // main slider area
    $('.slider-active-off').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1200:{
                items:1
            },
            1300:{
                items:1
            }
        }
    })

    // service area slider 
      $('.service-slider-wrapper').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:['<span><img src="img/services/Vector.svg"></span>','<span><img src="img/services/Vector1.svg"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1200:{
              items:4
            },
            1300:{
                items:4
            }
        }
    })


    // latest-blog area slider 
    $('.latest-blog-wrapper').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      dots:true,
      navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
            items:4
        },
          1300:{
              items:4
          }
      }
    })



    // team area slider 
    $('.team-wrapper').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1300:{
                items:1
            }
        }
    })


 
/*---------------------------------------------------------------------------------------
    Scroll to top Active
-----------------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<span><i class="fa-solid fa-arrow-up"></i></span>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // one page nav
    $('#one-page-nav').onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
        //I get fired when the animation is starting
        },
        end: function() {
        //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
        }
    });


})(jQuery); 