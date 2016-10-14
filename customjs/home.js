'use strict';

$(document).ready(function() {

  var lastScrollTop = 0;
  var flagScroll = true;

  $('#typed').typed({
           stringsElement: $('#typed-strings'),
           loop:true,
           backDelay: 500,
           loopCount: 2,
           typeSpeed: 100
   });
  flagScroll = false;

  $( window ).scroll(function() {
    var offsetTopMin = $('#tnd-first-slide').offset().top;
    var st = $(this).scrollTop();

    if($('#tnd-first-slide').offset().top >= $("#start-animation-worm").offset().top ){
      $('#tnd-first-slide').css('position', 'relative');
      $('#tnd-first-slide').css('top', '0px');
      $('#tnd-first-spacer').css('position', 'relative');
      $('.worm-svg').removeAttr('display');
      flagScroll = true;
    }

    if( offsetTopMin >= $('header').height() / 2 ){
      $('#home-container-text').css('opacity', 1);
      $('#btn-scroll').css('opacity', 1);
    }


    if($(window).scrollTop() >  $('#tnd-fourth-spacer').offset().top){
      $('#carousel-team .item.active .stamp').css('top', '-40px');
      $('#carousel-team .item.active #html5').css('left', '-27x');
      $('#carousel-team .item.active #angular').css('right', '-24px');
      $('#carousel-team .item.active #ruby').css('right', '-15px');
      $('#carousel-team .item.active #ios').css('left', '-10px');
      $('#carousel-team .item.active #swift').css('right', '-15px');
      $('#carousel-team .item.active #nodejs').css('left', '-46px');
      $('#carousel-team .item.active #light').css('right', '-32px');
      $('#carousel-team .item.active #line-chart').css('left', '-41px');
    }

    if(st < lastScrollTop){
      //On scroll UP
      if($(window).scrollTop() < $('#about').offset().top){
        $('.navbar').css('right', '-417px');
        if($('.burger__line-top').hasClass('activeLine1')){
          setTimeout(function(){
            $('.burger').trigger('click');
          }, 1000);
        }
      }
      if($(window).scrollTop() < $('#tnd-first-slide').offset().top){
        $('#tnd-first-slide').css('position', 'fixed');
        $('#tnd-first-spacer').css('position', '');
        $('#home-container-text').css('opacity', 0);
        $('#btn-scroll').css('opacity', 0);
      }
    }else{
          //Scroll Down
    }

    if($(window).scrollTop() == 0){
        $('#home-container-text').css('opacity', 0);
        $('#btn-scroll').css('opacity', 0);
    }

    lastScrollTop = st;
    showHideNavbar();
  });


  var showHideNavbar = function(){
       if(window.innerWidth > 400 && $(window).scrollTop() < $('#about').offset().top){
          $('.burger').css('top', '-90px');
        }else{
          $('.burger').css('top', '0');
        }
  };

  $('#carousel-team').carousel({
    //interval: 3000
    interval: 999999999
  });

  $('#carousel-team').on('slide.bs.carousel', function () {
    $('#carousel-team .item.active .stamp').css('top', '-48px');
    $('#carousel-team .item.active #html5').css('left', '-218px');
    $('#carousel-team .item.active #angular').css('right', '-218px');
    $('#carousel-team .item.active #ruby').css('right', '-218px');
    $('#carousel-team .item.active #ios').css('left', '-218px');
    $('#carousel-team .item.active #swift').css('right', '-218px');
    $('#carousel-team .item.active #nodejs').css('left', '-218px');
    $('#carousel-team .item.active #light').css('right', '-218px');
    $('#carousel-team .item.active #line-chart').css('left', '-218px');
  });

  $('#carousel-team').on('slid.bs.carousel', function () {
      $('#carousel-team .item.active .stamp').css('top', '-40px');
      $('#carousel-team .item.active #html5').css('left', '-27px');
      $('#carousel-team .item.active #angular').css('right', '-24px');
      $('#carousel-team .item.active #ruby').css('right', '-15px');
      $('#carousel-team .item.active #ios').css('left', '-10px');
      $('#carousel-team .item.active #nodejs').css('left', '-46px');
      $('#carousel-team .item.active #swift').css('right', '-15px');
      $('#carousel-team .item.active #light').css('right', '-32px');
      $('#carousel-team .item.active #line-chart').css('left', '-41px');
  });

  $('#tnd-logo').on('click',function(){
    $('body, html').animate({scrollTop:300}, 2000);
  });

  $('#btn-scroll').on('click',function(){
    $('body, html').animate({scrollTop:$("#typed").offset().top}, 2000);
  });

  showHideNavbar();
});
