'use strict';
$(document).ready(function() {

  $(".line").css("width","445px");

  // $(".prev").hover(function(){
  //   $("#arrow-svg").css("margin-left","-30px");
  // });

  // $(".prev").mouseout(function(){
  //   $("#arrow-svg").css("margin-left","0px");
  // });
  $('#typed-nav').typed({
           stringsElement: $('#typed-strings'),
           loop:false,
           backDelay: 500,
           typeSpeed: 100,
           showCursor: false
   });
  function pathPrepare ($el) {
      var lineLength = $el.getTotalLength();
      $($el).css('stroke-dasharray', lineLength);
      $($el).css('stroke-dashoffset', lineLength);
  }

  $('#pc-project-svg path, #tablet-project-svg path, #phone-project-svg path, #arrow-svg path').each(function(index){
      pathPrepare(this);
  });

/*----- Animation PC */
  var tween = new TimelineMax();
      tween.add(TweenMax.to($('#pc-project-svg path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

  var controller = new ScrollMagic.Controller();

  var scene0 = new ScrollMagic.Scene({triggerElement: '#tnd-single-project-spacer', duration: 300, tweenChanges: true})
      .setTween(tween)
      //.addIndicators()
      .addTo(controller);
/*----- END Animation PC */

/*---- Animation TABLET */
  var tweenTablet = new TimelineMax();
      tweenTablet.add(TweenMax.to($('#tablet-project-svg  path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

  var scene0 = new ScrollMagic.Scene({triggerElement: '#tnd-single-project-spacer', duration: 300, tweenChanges: true})
      .setTween(tweenTablet)
      .addTo(controller);
/*----- END Animation TABLET */


/*----- Animation SMARTPHONE */
  var tweetPhone = new TimelineMax();
      tweetPhone.add(TweenMax.to($('#phone-project-svg  path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

  var scene0 = new ScrollMagic.Scene({triggerElement: '#tnd-single-project-spacer', duration: 300, tweenChanges: true})
      .setTween(tweetPhone)
      .addTo(controller);
/*----- END Animation SMARTPHONE */


/*----- Animation LINE */
  var tweenArrow = new TimelineMax();
      tweenArrow.add(TweenMax.to($('#arrow-svg path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

  var scene0 = new ScrollMagic.Scene({triggerElement: '#tnd-single-project-spacer', duration: 300, tweenChanges: true})
      .setTween(tweenArrow)
      .addTo(controller);
/*----- END Animation SMARTPHONE */


});
