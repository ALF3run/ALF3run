$(document).ready(function() {
  $('h1').addClass("animated fadeIn");
  $('h1 small').addClass("animated fadeIn");
  $('.social').addClass("animated fadeIn");
  $('a').click(function(){
    $(this).blur();
  });
});