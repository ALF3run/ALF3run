$(document).ready(function() {
  $('#title-box').css("visibility", "visible").addClass("animated fadeIn");
  $('a').click(function(){
    $(this).blur();
  });
  
  $(window).scroll(function() {
    if($(window).scrollTop() > $('#sec2').offset().top-Math.min($(window).width(),$(window).height())*0.8 && $(window).width() >= 992) {
      $('#about').css("visibility", "visible").addClass("animated fadeInUp");
      $('#skills').css("visibility", "visible").addClass("animated rotateInUpRight");
    } 
    if($(window).scrollTop() > $('#sec2').offset().top-Math.min($(window).width(),$(window).height())*0.8 && $(window).width() < 992) {
      $('#about').css("visibility", "visible").addClass("animated fadeInUp");
    } 
    if($(window).scrollTop() > $('#skills').offset().top-Math.min($(window).width(),$(window).height())*0.8  && $(window).width() <992) {
      $('#skills').css("visibility", "visible").addClass("animated fadeInUp");
    } 
    if($(window).scrollTop() > $('.thumbnail').offset().top-Math.min($(window).width(),$(window).height())*0.8) {
      $('.thumbnail').css("visibility", "visible").addClass("animated fadeInUp");
    }
  });
});
