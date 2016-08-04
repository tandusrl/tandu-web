'use strict';

$(document).ready(function() {

  var lastScrollTop = 0;
  var flagScroll = true;

  $( window ).scroll(function() {
    var offsetTopMin = $('#tnd-first-slide').offset().top + 200;
    var st = $(this).scrollTop();
    if($('#tnd-first-slide').offset().top >= $('header').height() ){
      $('#tnd-first-slide').css('position', 'relative');
      $('#tnd-first-slide').css('top', '0px');
      $('#tnd-first-spacer').css('position', 'relative');
      flagScroll = true;
    }

    if( offsetTopMin >= $('header').height() ){
      $('#home-container-text').css('opacity', 1);
    }

    if($(window).scrollTop() >  $('#tnd-fourth-spacer').offset().top){
      $('#carousel-team .item.active .stamp').css('top', '-40px');
      $('#carousel-team .item.active #html5-svg').css('left', '-49px');
      $('#carousel-team .item.active #angular-svg').css('right', '-24px');
      $('#carousel-team .item.active #ruby-svg').css('right', '-15px');
      $('#carousel-team .item.active #ios-svg').css('left', '-10px');
      $('#carousel-team .item.active #swift-svg').css('right', '-15px');
      $('#carousel-team .item.active #nodejs-svg').css('left', '-46px');
      $('#carousel-team .item.active #light-svg').css('right', '-32px');
      $('#carousel-team .item.active #line-chart-svg').css('left', '-41px');
    }
    if(st < lastScrollTop){
      //On scroll UP
      if($(window).scrollTop() < $('#tnd-first-spacer').offset().top){
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
      }

      if($(window).scrollTop() < offsetTopMin ){
        $('#home-container-text').css('opacity', 0);
      }

    }else{
          if(flagScroll && $(window).scrollTop() > $('.start-animation-write').offset().top){
            $('#typed').typed({
                     stringsElement: $('#typed-strings'),
                     loop:true,
                     backDelay: 500,
                     loopCount: 2,
                     typeSpeed: 100
             });
            flagScroll = false;
          }
    }

    lastScrollTop = st;
    showHideNavbar();
  });


  var showHideNavbar = function(){
       if(window.innerWidth > 400 && $(window).scrollTop() < $('#tnd-first-spacer').offset().top){
          $('.burger').css('top', '-90px');
        }else{
          $('.burger').css('top', '0');
        }
  };

  $('#carousel-team').carousel({
    interval: 3000
  });

  $('#carousel-team').on('slide.bs.carousel', function () {
    $('#carousel-team .item.active .stamp').css('top', '-48px');
    $('#carousel-team .item.active #html5-svg').css('left', '-218px');
    $('#carousel-team .item.active #angular-svg').css('right', '-218px');
    $('#carousel-team .item.active #ruby-svg').css('right', '-218px');
    $('#carousel-team .item.active #ios-svg').css('left', '-218px');
    $('#carousel-team .item.active #swift-svg').css('right', '-218px');
    $('#carousel-team .item.active #nodejs-svg').css('left', '-218px');
    $('#carousel-team .item.active #light-svg').css('right', '-218px');
    $('#carousel-team .item.active #line-chart-svg').css('left', '-218px');
  });

  $('#carousel-team').on('slid.bs.carousel', function () {
      $('#carousel-team .item.active .stamp').css('top', '-40px');
      $('#carousel-team .item.active #html5-svg').css('left', '-49px');
      $('#carousel-team .item.active #angular-svg').css('right', '-24px');
      $('#carousel-team .item.active #ruby-svg').css('right', '-15px');
      $('#carousel-team .item.active #ios-svg').css('left', '-10px');
      $('#carousel-team .item.active #nodejs-svg').css('left', '-46px');
      $('#carousel-team .item.active #swift-svg').css('right', '-15px');
      $('#carousel-team .item.active #light-svg').css('right', '-32px');
      $('#carousel-team .item.active #line-chart-svg').css('left', '-41px');
  });

  showHideNavbar();
});
