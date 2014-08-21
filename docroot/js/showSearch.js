$(document).ready(function() {
  $('#search-toggle').hide();
  $('#searchBtn').click(function() {
    if ($('#search-toggle').is(':hidden')){
      $('#search-toggle').slideDown('fast');
    }
    else {
      $('#search-toggle').slideUp('fast');
    }
  });
});
