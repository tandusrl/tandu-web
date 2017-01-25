'use strict';
$(document).ready(function() {
var totalLength = '';

function pathPrepare ($el) {
    var lineLength = $el.getTotalLength();
    $($el).css('stroke-dasharray', lineLength);
    $($el).css('stroke-dashoffset', lineLength);
}

function pathPrepareReverse ($el) {
    totalLength = $el.getTotalLength();
    $($el).css('stroke-dasharray', totalLength);
    $($el).css('stroke-dashoffset', '-' + totalLength);
}


$('#cloud-group .cloud-animate, #cloud-worm, .cloud-inside, .smoke-left-right, #smoke-center, .worm-svg path, #idea-center, #idea-raggi, #idea-pencil, #team-first-line path, #logo-tandustroke-svg path, #intro-line path, #circle-1, #circle-1, #circle-2, #circle-3, .line-skills path, .generic-button, .product-button, .team-line path, #rectangle path, .last-line path').each(function(index){
    pathPrepare(this);
});

$('#team-second-line path').each(function(index){
    pathPrepareReverse(this);
});

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tweenCenter = new TimelineMax();
    tweenCenter.add(TweenMax.to($('#idea-center'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tweenRaggi = new TimelineMax();
    tweenRaggi.add(TweenMax.to($('#idea-raggi'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tweenPencil = new TimelineMax();
    tweenPencil.add(TweenMax.to($('#idea-pencil'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

  //tween.add(TweenMax.to('path', 1, {stroke: '#33629c', ease:Linear.easeNone}), 0);  // change color during the whole thing

var tween1 = new TimelineMax()
      .add(TweenMax.to($('#cloud-group .cloud-animate'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
      .add(TweenMax.to($('.cloud-inside'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
      .add(TweenMax.to($('#cloud-worm'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tween2 = new TimelineMax()
        .add(TweenMax.to($('.smoke-left-right'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($('#smoke-center'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tweenWorm = new TimelineMax();
    tweenWorm.add(TweenMax.to($('.worm-svg path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tweenLine1 = new TimelineMax();
    tweenLine1.add(TweenMax.to($('#team-first-line path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tweenLine2 = new TimelineMax();
    tweenLine2.add(TweenMax.to($('#team-second-line path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));


var tweenFirstLineCircle = new TimelineMax()
      .add(TweenMax.to($('.line-skills path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
      .add(TweenMax.to($('.team-line path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
      .add(TweenMax.to($('#rectangle path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
      .add(TweenMax.to($('.last-line path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var productButton = new TimelineMax()
      .add(TweenMax.to($('.product-button'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));


var genericButton = new TimelineMax()
      .add(TweenMax.to($('.generic-button'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));


// build scene
var scene0 = new ScrollMagic.Scene({triggerElement: '#trigger-idea', duration: 500, tweenChanges: true})
        .setTween(tweenCenter)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);


var scene0b = new ScrollMagic.Scene({triggerElement: '#trigger-idea', duration: 500, tweenChanges: true})
        .setTween(tweenPencil)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

var scene1 = new ScrollMagic.Scene({triggerElement: '#trigger1', duration: 900, tweenChanges: true})
        .setTween(tween1)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: '#trigger2', duration: 700, tweenChanges: true})
        .setTween(tween2)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

var lenghtWorm = $(".worm-svg path")[0].getTotalLength();

var line_skills = $(".line-skills path")[0].getTotalLength() * 0.3;
var team_line = $(".team-line path")[0].getTotalLength();
var rectangle = $("#rectangle path")[0].getTotalLength() * 0.1;
var last_line = $(".last-line path")[0].getTotalLength();

var totalHeight = line_skills + team_line + rectangle + last_line;

var scene3 = new ScrollMagic.Scene({triggerElement: '#triggerWorm', duration: lenghtWorm, offset: 100, tweenChanges: true})
        .setTween(tweenWorm)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);


var scene6 = new ScrollMagic.Scene({triggerElement: '#triggerLineCircle', duration: totalHeight, tweenChanges: true})
          .setTween(tweenFirstLineCircle)
          //.addIndicators() // add indicators (requires plugin)
          .addTo(controller);

if($(window).width() > 1024){
  var scene7 = new ScrollMagic.Scene({triggerElement: '#triggerButton', duration: 500, tweenChanges: true})
            .setTween(productButton)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);

  var scene8 = new ScrollMagic.Scene({triggerElement: '#triggerContact', duration: 500, tweenChanges: true})
            .setTween(genericButton)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
}

});
