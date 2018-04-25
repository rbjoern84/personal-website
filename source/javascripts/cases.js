$(document).ready(function(){

  function setCssTransform(imageContainer){
    var casePictures = imageContainer.find(".scroll-image");
    if (casePictures.length > 0) {
      console.log("yes");
      casePictures.each(function(){
        var imageSize = $(this).children().height();
        var containerSize = $(this).height();
        var offsetY = (imageSize - containerSize) * (-1);
        $(this).children().css("transform", "translateY("+ offsetY +"px)");
      });
    }
  }

  $(".carousel").one("mouseover", function(){
    setCssTransform($(this));
  });

  $(".carousel").on("beforeChange", function(){
    setCssTransform($(this));
  });
});
