$(document).ready(function () {

    /* pro_slide */
    const pro_slide = new Swiper('.pro_slide', {
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            768: { //min-width 768px 이상에서 보이는 개수
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: { //min-width 1200px 이상에서 보이는 개수
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 120,
            draggable: true,
        },
        speed: 1500,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
    })
});