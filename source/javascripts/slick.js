$(document).ready( function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 500,
    cssEase: 'ease',
    mobileFirst: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    lazyLoad: 'ondemand',

    responsive: [{

      breakpoint: 768,
      settings: {
        arrows: true
      }
    }]
  });
});
