$(document).ready(function() {
  $('#menu').click(function() {
    if ($('#mainNav').is(':hidden')){
      $('#mainNav').slideDown('fast');
    }
    else {
      $('#mainNav').slideUp('fast');
    }
  });
});
