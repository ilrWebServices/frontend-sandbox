$(document).ready(function() {
  //$('#search-toggle').hide();
  $('#menu').click(function() {
    if ($('nav.top').is(':hidden')){
      $('nav.top').slideDown('fast');
    }
    else {
      $('nav.top').slideUp('fast');
    }
  });
});
