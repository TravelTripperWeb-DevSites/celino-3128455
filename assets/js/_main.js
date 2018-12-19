/*
   Settings and other scripts
   ========================================================================== */
//scroll change header style
$(function() {

    var header = $(".top-nav");
    $(window).on("load resize scroll",function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 170) {
          header.removeClass('top-nav--flower').addClass("top-nav--gradient");
          header.css({'top':'','bottom':''});
        } else {
          var scrollTopPx = $(window).scrollTop();
          header.css({'top': '-'+scrollTopPx+'px'});
          header.removeClass("top-nav--gradient").addClass('top-nav--flower');
        }
    });

});
