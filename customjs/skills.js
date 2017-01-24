//Skills carousel
$(document).ready(function() {

  $("#arrow-right").click(function(){
    $(".skills-pc").css("display", "none");
    $(".circle-item").addClass("circle-item-hover");
    $(".content-wrap").addClass("content-wrap-rotate");

    if($(".ch-info-back").hasClass("active")){
      $(".skills-lens").show();
      $(".circle-item").addClass("circle-item-hover1");
      $(".content-wrap").addClass("content-wrap-rotate1");
      $(".content-wrap .content-2").css("opacity", "1");
      $(".content-wrap .content-0").css("opacity", "0");
    }else{
      $(".ch-info-back").addClass("active");
    }
  });

  $("#arrow-left").click(function(){

    if($(".circle-item").hasClass("circle-item-hover") && !$(".circle-item").hasClass("circle-item-hover1")){
      $(".circle-item").removeClass("circle-item-hover");
      $(".content-wrap").removeClass("content-wrap-rotate");
      $setTimeout(function() {
        $(".skills-pc").css("display", "inline-block");
      }, 10);
      return;
    }

    if($(".ch-info-back").hasClass("active")){
      $(".skills-lens").hide();
      $(".circle-item").removeClass("circle-item-hover1");
      $(".circle-item").addClass("circle-item-hover");
      $(".content-wrap").removeClass("content-wrap-rotate1");
      $(".content-wrap").addClass("content-wrap-rotate");
      $(".ch-info-back").removeClass("active");
      $(".content-wrap .content-2").css("opacity", "0");
      $(".content-wrap .content-0").css("opacity", "1");
    }else{
      $(".circle-item").removeClass("circle-item-hover");
      $(".content-wrap").removeClass("content-wrap-rotate");
    }
  });

});

