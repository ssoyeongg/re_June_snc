$(document).ready(function () {

    $(".two").hide();
    $(".tab_list li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        let idx = $(this).index();
        $(".list div").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
    });

});