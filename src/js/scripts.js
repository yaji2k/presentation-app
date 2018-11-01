$(document).ready(function () {
    $('.slider').bxSlider({
        pagerType: 'short',
        nextText: '<span class="arrow right"></span>',
        prevText: '<span class="arrow left"></span>',
        pagerShortSeparator: ' из '
    });

    showNav();

    function showNav() {
        var item = $(".bx-controls")
        item.css({"margin-left": "-" + item.width() / 2 + "px"});
        if ($(".slider").width() === 0) {
            item.css({
                display: "none"
            });
        }
    }
});