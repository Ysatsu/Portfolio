
function scrollToTop() {
    scrollTo(0, 0);
   }

$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});

$(function() {
    var nav = $('.nav');
    //position of nav   
    var navTop = nav.offset().top;
    //process everytime scroll
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        //スクロール位置がnavの位置より下だったらクラスfixedを追加 Adding fixed when position of scroll is below the position of nav
        if (winTop >= navTop) {
            nav.addClass('fixed')
        } else if (winTop <= navTop) {
            nav.removeClass('fixed')
        }
    });
});

$(function () {
    var headerHight = 180; //ヘッダの高さ
    $('a[href*=\\#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 100, "swing");
        return false;
    });
});
