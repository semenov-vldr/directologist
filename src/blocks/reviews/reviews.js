const reviewsSlider = document.querySelector(".reviews__slider");

if (reviewsSlider) {

  let mySwiper = new Swiper(reviewsSlider, {
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: '.slider-nav__next',
    //   prevEl: '.slider-nav__prev',
    // },


    grabCursor: true,
    slidesPerView: 3,
    loop: true,
    effect: "coverflow",
    centeredSlides: true,
    initialSlide: 1,

    coverflowEffect: {
      rotate: 0,
      stretch: 160,
      depth: 30,
      modifier: 4.5,
      slideShadows: false,
    },

    // Ширина экрана
    breakpoints: {
      // 320: {
      //   slidesPerView: 1.2,
      //   spaceBetween: 16,
      // },

      // 768: {
      //   slidesPerView: 1.5,
      //   spaceBetween: 24,
      // },
    }

  });

}