$(document).ready(function() {

  // init Isotope
  var $grid = $('.projects-box').isotope({
    itemSelector: '.single-project',
    layoutMode: 'fitRows'
  });
  // filter items on button click
  $('.projects-menu').on( 'click', 'li', function() {
    var filterValue = "";
      filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('.projects-menu li').removeClass('active');
    $(this).addClass('active');
  });
});
