'use strict';
$(document).ready(function() {

  $(".line").css("width","445px");

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

  $('#empty-cloud path, #empty-app path, #empty-website path, #empty-graphics path').each(function(index){
      pathPrepare(this);
  });

/*----- Animation PC */
  var tween = new TimelineMax();
      tween.add(TweenMax.to($('#empty-cloud path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

  var controller = new ScrollMagic.Controller();

  var scene0 = new ScrollMagic.Scene({triggerElement: '#animation-start', duration: 300, tweenChanges: true})
      .setTween(tween)
      //.addIndicators()
      .reverse(false)
      .addTo(controller);
/*----- END Animation PC */

/*---- Animation TABLET */
  var tweenTablet = new TimelineMax();
      tweenTablet.add(TweenMax.to($('#empty-app  path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

  var scene0 = new ScrollMagic.Scene({triggerElement: '#animation-start', duration: 300, tweenChanges: false})
      .setTween(tweenTablet)
      .reverse(false)
      .addTo(controller);
/*----- END Animation TABLET */


/*----- Animation SMARTPHONE */
  var tweetPhone = new TimelineMax();
      tweetPhone.add(TweenMax.to($('#empty-website  path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

  var scene0 = new ScrollMagic.Scene({triggerElement: '#animation-start', duration: 300, tweenChanges: true})
      .setTween(tweetPhone)
      .reverse(false)
      .addTo(controller);
/*----- END Animation SMARTPHONE */


/*----- Animation LINE */
  var tweenArrow = new TimelineMax();
      tweenArrow.add(TweenMax.to($('#empty-graphics path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

  var scene0 = new ScrollMagic.Scene({triggerElement: '#animation-start', duration: 300, tweenChanges: true})
      .setTween(tweenArrow)
      .reverse(false)
      .addTo(controller);
/*----- END Animation SMARTPHONE */


});
