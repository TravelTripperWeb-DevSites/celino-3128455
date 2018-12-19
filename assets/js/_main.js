/*
   Settings and other scripts
   ========================================================================== */
//scroll change header style
$(function() {

    var header = $(".top-nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            header.removeClass('top-nav--flower').addClass("top-nav--gradient");
            header.addClass("top-nav--gradient--fix"); 
        } else {
            header.removeClass("top-nav--gradient").addClass('top-nav--flower');
            header.removeClass("top-nav--gradient--fix");
        }
    });

});
