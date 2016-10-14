'use strict';
$(document).ready(function() {

  var points = [];
  var points2 = [];
  var svgOffset =  $('#start-animation-worm').offset();
  var lineOffset = $('#start-line-skills').offset();

  //Big line
  $('.worm-nodes').each(function(i,node){
      var y = $(node).offset().top - svgOffset.top;
      var x = $(node).offset().left - svgOffset.left;
      points.push([x,y]);
  });

  //This line start at the end off skills animations
  $('.line-end-nodes').each(function(i,node){
      var y = $(node).offset().top - lineOffset.top;
      var x = $(node).offset().left - lineOffset.left;
      points2.push([x,y]);
  });

var line = d3.line()
    .curve(d3.curveCardinal.tension(1));

var heightContainer = $('#about').height() + $('#tnd-first-spacer').height() + $('#tnd-third-spacer').height();
var widthContainer = $('body').width();
var widthLine = $('body').width() - 7;
var heightLine = $('#tnd-fourth-spacer').height() + $('#tnd-skills').height() + 27;
var viewBox = '0 0 ' + widthContainer + ' ' + heightContainer;
var viewBox1 = '0 0 ' + widthLine + ' ' + heightLine ;

var svg = d3.select('#start-animation-worm').insert('svg', ':first-child')
    .datum(points)
    .attr('width', widthContainer)
    .attr('height', heightContainer)
    .attr('class', 'worm-svg')
    .attr('display', 'none')
    .attr('viewBox', viewBox);

var lineSvg = d3.select('#start-line-skills').insert('svg', ':first-child')
    .datum(points2)
    .attr('width', $('body').width())
    .attr('height', heightLine)
    .attr('class', 'line-skills')
    .attr('viewBox', viewBox1);

var path = svg.append('path')
    .attr('d', line);

var path1 = lineSvg.append('path')
    .attr('d', line);


// var circle = svg.append('circle')
//     .attr('r',10)
//     .attr('transform', 'translate(' + points[0] + ')');


function tweenDash() {
  var l = this.getTotalLength(); //jshint ignore:line
  var i = d3.interpolateString('0,' + l, l + ',' + l);
  return function(t) { return i(t); };
}

});
