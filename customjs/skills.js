//Skills carousel
$(document).ready(function() {
  /** Check if browser is IE **/
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');
  var edge = ua.indexOf('Edge/');

  if (msie > 0 || trident > 0 || edge > 0) {

      /*** if IE ***/

      $("#not-for-ie").hide();
      $(".only-for-ie").show();

      $("#arrow-left").click(function(){

        if($(".circle-item").hasClass("circle-item-hover") && !$(".circle-item").hasClass("circle-item-hover1")){
          $(".circle-item").removeClass("circle-item-hover");
          $(".content-wrap").removeClass("content-wrap-rotate");
          setTimeout(function() {
            $(".skills-pc").css("display", "inline-block");
          }, 500);
          $('#carouselSkillsIE').carousel('prev');
          return;
        }

        if($(".ch-info-back").hasClass("active")){
          $(".skills-lens").hide();
          $(".circle-item").removeClass("circle-item-hover1");
          $(".circle-item").addClass("circle-item-hover");
          $(".content-wrap").removeClass("content-wrap-rotate1");
          $(".content-wrap").addClass("content-wrap-rotate");
          $(".ch-info-back").removeClass("active");
        }else{
          $(".circle-item").removeClass("circle-item-hover");
          $(".content-wrap").removeClass("content-wrap-rotate");
        }

        $('#carouselSkillsIE').carousel('prev');
      });

      $("#arrow-right").click(function(){
        $(".skills-pc").css("display", "none");
        $(".circle-item").addClass("circle-item-hover");
        $(".content-wrap").addClass("content-wrap-rotate");

        if($(".ch-info-back").hasClass("active")){
          $(".skills-lens").show();
          $(".circle-item").addClass("circle-item-hover1");
          $(".content-wrap").addClass("content-wrap-rotate1");
        }else{
          $(".ch-info-back").addClass("active");
        }
        $('#carouselSkillsIE').carousel('next');
      });

  }else{
    $("#arrow-left").click(function(){

      if($(".circle-item").hasClass("circle-item-hover") && !$(".circle-item").hasClass("circle-item-hover1")){
        $(".circle-item").removeClass("circle-item-hover");
        $(".content-wrap").removeClass("content-wrap-rotate");
        setTimeout(function() {
          $(".skills-pc").css("display", "inline-block");
        }, 500);
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
  };

});

