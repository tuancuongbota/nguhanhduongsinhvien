$(document).ready(function(){
  if($('.slick-slideshow-item').length) {
    $('.slick-slideshow-item').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
   }
   if($('.slick-service').length) {
    $('.slick-service').slick({
      dots: true,
      infinite: true,
      speed: 300,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
   }
   if($('.slick-feedback').length) {
    $('.slick-feedback').slick({
      dots: true,
      infinite: true,
      speed: 300,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
   }
   if($('.slick-news').length) {
    $('.slick-news').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
   }
   $(".back-to-top").click(function (event) {
    $('html, body').animate({scrollTop: 0}, 1000);
    });
    // Hide,Show ScrollToTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top,.header_nav').addClass('active');
        } else {
            $('.back-to-top,.header_nav').removeClass('active')
        }
    });

});