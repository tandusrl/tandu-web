'use strict';
$(document).ready(function() {
//   var points = [];
//   var svgOffset =  $('#tnd-project-spacer').offset();

//   $('.worm-nodes').each(function(i,node){
//       var y = $(node).offset().top - svgOffset.top;
//       var x = $(node).offset().left - svgOffset.left;
//       points.push([x,y]);
//   });

// var line = d3.line()
//     .curve(d3.curveCardinal.tension(1));

// var heightContainer = $('#tnd-project-spacer').height();
// var widthContainer = $('#tnd-project-spacer').width();
// var viewBox = '0 0 ' + widthContainer + ' ' + heightContainer;

// var svg = d3.select('#tnd-project-spacer').insert('svg', ':first-child')
//     .datum(points)
//     .attr('width', widthContainer)
//     .attr('height', heightContainer)
//     .attr('class', 'worm-svg')
//     .attr('viewBox', viewBox);

// var path = svg.append('path')
//     .attr('d', line);


// var circle = svg.append('circle')
//     .attr('r',10)
//     .attr('transform', 'translate(' + points[0] + ')');


// function tweenDash() {
//   var l = this.getTotalLength(); //jshint ignore:line
//   var i = d3.interpolateString('0,' + l, l + ',' + l);
//   return function(t) { return i(t); };
// }

function pathPrepare ($el) {
    var lineLength = $($el)[0].getTotalLength()
    $($el).css('stroke-dasharray', lineLength);
    $($el).css('stroke-dashoffset', lineLength);
}

pathPrepare('.worm-svg path');

var controller = new ScrollMagic.Controller();

var tweenWorm = new TimelineMax();
    tweenWorm.add(TweenMax.to($('.worm-svg path'), 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

//var scene3 = new ScrollMagic.Scene({triggerElement: '#triggerWorm', duration: $('#tnd-project-spacer').height(), tweenChanges: true})
        //.setTween(tweenWorm)
        //.addIndicators() // add indicators (requires plugin)
        //.addTo(controller);

});
