const Fullpage = new fullpage('#content', {
    scrollOverflow: false, // line-height : 1 에서 스크롤 생기는 거 없애줘...
    paddingTop: '101px',
});

const MAIN_VISUAL = new Swiper('.main_visual_slide', {
    loop: true,
    slideActiveClass: 'on',
    autoplay: {
        delay: 4000,
    },
    effect: 'fade',
    speed: 2000,
    fadeEffect: {
        crossFade: true
    },

    on: {
        init: function () {
            document.querySelector('.mainVisual .b_inner .num').classList.add('on');
        },
        slideChangeTransitionEnd: function () {
            document.querySelector('.mainVisual .b_inner .num').classList.remove('on');
        },
        slideChangeTransitionStart: function () {
            document.querySelector('.mainVisual .b_inner .num').classList.add('on');
        },
    }
})