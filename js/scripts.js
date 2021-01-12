    //scripts i found to be very usefull i made sure that everything came into existance    
    (function($) {
    "use strict"; //Start of use strict dont really have to but it would be kind of funny
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery);

// i am going to use this to make a new date
var date = new Date();
//Get Copyright
document.getElementById("copy").innerHTML =  "Copyright © " + date.getFullYear() + " Pjotr Wisse";

//this makes my birthday automatic
// The date you were born
let birthDate = new Date(2002, 5, 9, 0, 0, 0);
// The current date
let currentDate = date;
// The age in years
let age = currentDate.getFullYear() - birthDate.getFullYear();
// Compare the months
let month = currentDate.getMonth() - birthDate.getMonth();
// Compare the days
let day = currentDate.getDate() - birthDate.getDate();
// if the date has already happend than change year
if ( month < 0 || month === 0 && day < 0 )
{
	age--;
}
document.getElementById("age").innerHTML = age;
