$(document).ready(function() {
  $('#title-box').css("visibility", "visible").addClass("animated fadeIn");
  $('a').click(function(){
    $(this).blur();
  });
  
  $(window).scroll(function() {
    if($(window).scrollTop() > $('#sec2').offset().top-Math.min($(window).width(),$(window).height())*0.8 && $(window).width() >= 992) {
      $('#about').css("visibility", "visible").addClass("animated fadeInLeft");
      $('#skills').css("visibility", "visible").addClass("animated fadeInRight");
      setTimeout(fillingProgressBars, 500); 
    } 
    if($(window).scrollTop() > $('#sec2').offset().top-Math.min($(window).width(),$(window).height())*0.8 && $(window).width() < 992) {
      $('#about').css("visibility", "visible").addClass("animated fadeInLeft");
    } 
    if($(window).scrollTop() > $('#skills').offset().top-Math.min($(window).width(),$(window).height())*0.8  && $(window).width() <992) {
      $('#skills').css("visibility", "visible").addClass("animated fadeInLeft");
      setTimeout(fillingProgressBars, 500);
    }
    if($(window).scrollTop() > $('.thumbnail').offset().top-Math.min($(window).width(),$(window).height())*0.8) {
      $('.thumbnail').css("visibility", "visible").addClass("animated fadeInUp");
    }
  });
});

function fillingProgressBars() {
  $('.progress-bar')[0].style.width = "90%";
  $('.progress-bar')[1].style.width = "80%";
  $('.progress-bar')[2].style.width = "90%";
  $('.progress-bar')[3].style.width = "80%";
}
