$(window).load(function() {
  // init Isotope
  var $grid = $('.projects-box').isotope({
    itemSelector: '.single-project'
  });
  // filter items on button click
  $('.projects-menu').on( 'click', 'li', function() {
    var filterValue = "";
      filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('.projects-menu li').removeClass('active');
    $(this).addClass('active');
  });

  $('.mobile-filter').on( 'click', function() {
    if($(this).hasClass("active")){
      $("#tnd-project-spacer .row-menu").css("height", "0px");
      $(this).removeClass("active");

    }else{
      $("#tnd-project-spacer .row-menu").css("height", "auto");
      $(this).addClass("active");
    }
  });
});
