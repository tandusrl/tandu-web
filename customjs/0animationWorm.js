'use strict';
$(document).ready(function() {
  var points = [];
  var svgOffset =  $('#tnd-first-spacer').offset();

  $('.worm-nodes').each(function(i,node){
      var y = $(node).offset().top - svgOffset.top;
      var x = $(node).offset().left - svgOffset.left;
      points.push([x,y]);
  });

var line = d3.line()
    .curve(d3.curveCardinal.tension(0));

var heightContainer = $('#tnd-first-spacer').height();
var widthContainer = $('#tnd-first-spacer').width();
var viewBox = '0 0 ' + widthContainer + ' ' + heightContainer;

var svg = d3.select('#tnd-first-spacer').insert('svg', ':first-child')
    .datum(points)
    .attr('width', widthContainer)
    .attr('height', heightContainer)
    .attr('class', 'worm-svg')
    .attr('viewBox', viewBox);

var path = svg.append('path')
    .attr('d', line);


var circle = svg.append('circle')
    .attr('r',10)
    .attr('transform', 'translate(' + points[0] + ')');


function tweenDash() {
  var l = this.getTotalLength(); //jshint ignore:line
  var i = d3.interpolateString('0,' + l, l + ',' + l);
  return function(t) { return i(t); };
}

});
