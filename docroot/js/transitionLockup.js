$(function(){
  $(window).scroll(function() {
      var $myImg = $('#bannerImg');
      var $myDiv = $('#banner');
      var $myBtn = $('#searchBtn');
      var $mySrchImg = $('#searchImg');
      var st = $(this).scrollTop();
      if(st >= 2){
        $myImg.addClass('shrink');
        $myDiv.addClass('shrink');
        $myBtn.addClass('shrink');
        $mySrchImg.addClass('shrink');
      }
      else if(st <= 1) {
        $myImg.removeClass('shrink');
        $myDiv.removeClass('shrink');
        $myBtn.removeClass('shrink');
        $mySrchImg.removeClass('shrink');
      }
  }).scroll();
})
