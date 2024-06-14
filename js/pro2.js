$(document).ready(function () {

    $(".pro_list>div:not(:first-child)").hide();
    $(".pro_area div").mouseenter(function () {
        let idx = $(this).index();
        $(".pro_list>div").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
    });

});