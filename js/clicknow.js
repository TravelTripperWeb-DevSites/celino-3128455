$("#downClick").click(function() {
    $('html,body').animate({
        scrollTop: $(".home-container").offset().top},
        'slow');
});