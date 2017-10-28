$(document).ready(function(){

  var $menuBtn = $(".menu-btn");
  var $html = $("html");
  var $body = $("body");
  var scrollSpeed = 1000;

  // Open menu
  $menuBtn.click(function(){
    $body.toggleClass("nav-open no-scroll");
    $html.toggleClass("no-scroll");
  });

  // Scroll to target element
  $('.scroll-link').click(function(){
    targetId = $(this).attr("href");
    $target = $(targetId);
    scrollSpeed = Math.abs($target.offset().top - $(this).offset().top) / 13 + 280;
    $('html,body').animate({
      scrollTop: $target.offset().top - 100
    },scrollSpeed);
    $body.removeClass("nav-open no-scroll");
    $html.removeClass("no-scroll");
    return false;
  });
});
