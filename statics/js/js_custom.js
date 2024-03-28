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
});