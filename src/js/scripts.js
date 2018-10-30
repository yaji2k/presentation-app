$(document).ready(function () {
    $('.slider').bxSlider({
        pagerType: 'full',
        nextText: '<span class="arrow right"></span>',
        prevText: '<span class="arrow left"></span>'
    });

    $(".bx-controls").css({"margin-left": "-" + $(".bx-controls").width() / 2 + "px"});
});