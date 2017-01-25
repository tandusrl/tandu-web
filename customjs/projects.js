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
    if($(window).width() <= 500){
      $("#tnd-project-spacer .row-menu").css("height", "0px");
      $('.mobile-filter').removeClass("active");
      $(".fa-angle-down").hide();
      $(".fa-angle-up").show();
      $("html").css("overflow-y", "auto");
    }
  });

  $('.mobile-filter').on( 'click', function() {
    if($(this).hasClass("active")){
      $("#tnd-project-spacer .row-menu").css("height", "0px");
      $("html").css("overflow-y", "auto");
      $(this).removeClass("active");
      $(".fa-angle-down").hide();
      $(".fa-angle-up").show();

    }else{
      $("#tnd-project-spacer .row-menu").css("height", "auto");
      $("html").css("overflow-y", "hidden");
      $(".fa-angle-down").show();
      $(".fa-angle-up").hide();
      $(this).addClass("active");
    }
  });
});
