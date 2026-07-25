(function ($) {
   'use strict';

   // Spinner
   var spinner = function () {
      setTimeout(function () {
         if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
         }
      }, 1);
   };
   spinner();

   // Initiate the wowjs
   new WOW().init();

   // Sticky Navbar
   //    $(window).scroll(function () {
   //       if ($(this).scrollTop() > 0) {
   //          $('.navbar').addClass('position-fixed bg-dark shadow-sm');
   //       } else {
   //          $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
   //       }
   //    });

   // Back to top button
   $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
         $('.back-to-top').fadeIn('slow');
      } else {
         $('.back-to-top').fadeOut('slow');
      }
   });
   $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
   });

   // Date and time picker
   $('.date').datetimepicker({
      format: 'DD/MM/YYYY',
   });
   $('.time').datetimepicker({
      format: 'LT',
   });

   // Facts counter
   $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000,
   });

   // Rating
   $('#halfstarsReview').rating({
      half: true,
      color: '#DA3C3C',
      click: function (e) {
         console.log(e);
         $('#halfstarsInput').val(e.stars);
      },
   });

   // Testimonials carousel
   $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav: false,
      responsive: {
         0: {
            items: 1,
         },
         768: {
            items: 2,
         },
         992: {
            items: 3,
         },
      },
   });
})(jQuery);
