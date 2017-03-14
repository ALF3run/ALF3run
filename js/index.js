$(document).ready(function() {
  $('#title-box').css("visibility", "visible").addClass("animated fadeIn");
  $('a').click(function(){
    $(this).blur();
  });
  
  $(window).scroll(function() {
    if($(window).scrollTop() > Math.min($(window).height(), $(window).width())*0.6) {
      $('#about').css("visibility", "visible").addClass("animated fadeInUp");
      $('#skills').css("visibility", "visible").addClass("animated rotateInUpRight");
      $(window).off();
    }
  });
});
