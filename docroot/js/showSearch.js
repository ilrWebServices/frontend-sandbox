$(document).ready(function() {
  $('#searchBtn').click(function() {
    if ($('#search-toggle').hasClass('openSearch')){
      $('#search-toggle').removeClass('openSearch');
    }
    else {
      $('#search-toggle').addClass('openSearch');
    }
  });

  $('#searchBtnMobile').click(function() {
    if ($('#search-toggle').hasClass('openSearch')){
      $('#search-toggle').removeClass('openSearch');
    }
    else {
      $('#search-toggle').addClass('openSearch');
    }
  });
});
