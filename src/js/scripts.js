$(document).ready(function () {
    _width = $(window).innerWidth();
    _breakPoint = 800;
    $('.slider').bxSlider({
        pagerType: 'short',
        nextText: '<span class="arrow right"></span>',
        prevText: '<span class="arrow left"></span>',
        pagerShortSeparator: ' из '
    });

    showNav();
    menuSwitch();
    $(window).on("resize", function () {
        _width = window.event.target.innerWidth;
        if(_width > _breakPoint) {
            $(".menu").css({"display": "flex", left: 0});
        } else {
            $(".menu").css({"display": "none", left: "-100%"});
        }
        $(".bg_active_menu").css({ "display": "none" });
    });
    function showNav(_breakPoint) {
        var item = $(".bx-controls")
        item.css({ "margin-left": "-" + item.width() / 2 + "px" });
        if ($(".slider").width() === 0) {
            item.css({
                display: "none"
            });
        }
    }

    function menuSwitch(_breakPoint) {
        var _breakPoint = _breakPoint || 800;
        $(".menu_btn").on("click", function () {
            if (_width <= _breakPoint) {
                $(".menu").css({ "display": "flex" }).animate({ left: 0 }, "fast");
                $(".bg_active_menu").css({ "display": "block" });
            }
        });
        $(".bg_active_menu, .nav_item").on("click", function () {
            if (_width <= _breakPoint) {
                $(".menu").animate({ left: "-100%" }, "fast", function () {
                    $(".menu").css({ "display": "none" });
                });
                $(".bg_active_menu").css({ "display": "none" });
            }
        });
    }
});