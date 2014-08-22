//$(function(){
//    $(window).scroll(function() {
//        var $myDiv = $('#myDiv');
//        var st = $(this).scrollTop();
//        $myDiv.height( st );
//        if(st == 0) {
//            $myDiv.hide();
//        } else {
//            $myDiv.show();
//        }
//    }).scroll();
//})

// cut to height with scroll
// $(function(){
//     $(window).scroll(function() {
//         var $myDiv = $('#topNav');
//         var banner = document.getElementById('banner');
//         var st = $(this).scrollTop();
//         $myDiv.height(st);
//         if(st > 75) {
//             $myDiv.height(85);
//             banner.style.backgroundImage = 'url(images/CU-ILR-75-seal.png) no-repeat left top';
//             banner.style.background = 'url(images/CU-ILR-75-seal.svg), none';
//         } else {
//             $myDiv.height(150);
//             banner.style.backgroundImage = 'url(images/CU-ILR-caps-120-white.png) no-repeat left top';
//             banner.style.background = 'url(images/CU-ILR-caps-120-white.svg), none';
//         }
//     }).scroll();
// })

//reduce height gradually with scroll
// $(function(){
//     $(window).scroll(function() {
//         var $myImg = $('#bannerImg');
//         var $myDiv = $('#banner');
//         var myNav = document.getElementById('mainNav');
//         var st = $(this).scrollTop();
//         var dh = ((60 - st) / 2)+'px';
//         if(st <= 0){
//             $myImg.height(120);
//             $myDiv.height(120);
//             myNav.style.paddingTop = '30px';
//         }
//         else if(st > 0 && st < 60) {
//             $myImg.height(120 - st);
//             $myDiv.height(120 - st);
//             myNav.style.paddingTop = dh;
//         } else {
//             $myImg.height(60);
//             $myDiv.height(60);
//             myNav.style.paddingTop = '6px';
//         }
//     }).scroll();
// })

$(function(){
    $(window).scroll(function() {
        var $myImg = $('#bannerImg');
        var $myDiv = $('#banner');
        var myNav = document.getElementById('mainNav');
        var st = $(this).scrollTop();
        var dh = ((60 - st) / 2)+'px';
        if(st <= 0){
            $myImg.height(120);
            $myDiv.height(120);
            myNav.style.paddingTop = '30px';
        }
        else if(st > 0 && st < 60) {
            $myImg.height(120 - st);
            $myDiv.height(120 - st);
            myNav.style.paddingTop = dh;
            if(dh <= 7){
                $myImg.height(60);
                $myDiv.height(60);
                myNav.style.paddingTop = '7px';
            }
        }
    }).scroll();
})
