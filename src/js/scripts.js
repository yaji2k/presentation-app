window.onload = function () {
    var coordBody = $("html, body");
    moveUP();
    function moveUP() {
        $(".btn_back").on("click", function () {
            coordBody.animate({scrollTop: 0}, 1000);
        });
    }
}