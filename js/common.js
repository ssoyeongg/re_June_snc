$(document).ready(function () {

    /* depth2 */
    $(".depth2, .depth2_bg").hide();
    $(".gnb>li").hover(function () {
        $(this).find(".depth2").stop().fadeToggle(500);
        $(".depth2_bg").stop().slideToggle(500);
    });

    /* sitemap */
    $(".mdepth2").hide();
    $(".sitemap>ul>li").click(function () {
        $(this).find(".mdepth2").stop().slideDown();
        $(this).siblings().find(".mdepth2").stop().slideUp();
    });

    $(".sitemap").hide();
    $(".ham").click(function () {
        $(".sitemap").fadeIn();
    });
    $(".sitemap_close").click(function () {
        $(".sitemap").fadeOut();
    });

    /* lang_down */
    $(".lang_down").hide();
    $(".lang").click(function () {
        $(".lang_down").stop().slideToggle();
    });

});