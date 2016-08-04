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


$('#pc-group path, #grow-group path, .worm-svg path, #idea-group path, #team-first-line path, #logo-tandustroke-svg path').each(function(index){
    pathPrepare(this);
});

$('#team-second-line path').each(function(index){
    pathPrepareReverse(this);
});

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax();
    tween.add(TweenMax.to($('#idea-group path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));
  //tween.add(TweenMax.to('path', 1, {stroke: '#33629c', ease:Linear.easeNone}), 0);  // change color during the whole thing

var tween1 = new TimelineMax();
    tween1.add(TweenMax.to($('#pc-group path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tween2 = new TimelineMax();
    tween2.add(TweenMax.to($('#grow-group .grow-money'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));
    tween2.add(TweenMax.to($('#grow-group .grow-leaf'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tweenWorm = new TimelineMax();
    tweenWorm.add(TweenMax.to($('.worm-svg path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tweenLine1 = new TimelineMax();
    tweenLine1.add(TweenMax.to($('#team-first-line path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var tweenLine2 = new TimelineMax();
    tweenLine2.add(TweenMax.to($('#team-second-line path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));



// build scene
var scene0 = new ScrollMagic.Scene({triggerElement: '#triggerWorm', duration: 300, tweenChanges: true})
        .setTween(tween)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

var scene1 = new ScrollMagic.Scene({triggerElement: '#trigger1', duration: 500, tweenChanges: true})
        .setTween(tween1)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: '#trigger2', duration: 400, tweenChanges: true})
        .setTween(tween2)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: '#triggerWorm', duration: $('#tnd-first-spacer').height(), tweenChanges: true})
        .setTween(tweenWorm)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

var scene4 = new ScrollMagic.Scene({triggerElement: '#triggerLine', duration: 400, tweenChanges: true})
        .setTween(tweenLine1)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

var scene5 = new ScrollMagic.Scene({triggerElement: '#triggerLine', duration: 400, tweenChanges: true})
        .setTween(tweenLine2)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

});
