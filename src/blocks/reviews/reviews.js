const reviewsSlider = document.querySelector(".reviews__slider");

if (reviewsSlider) {

  let mySwiper = new Swiper(reviewsSlider, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: "auto",
    loop: true,
    effect: "coverflow",
    centeredSlides: true,
    initialSlide: 1,

    coverflowEffect: {
      rotate: 0,
      // stretch: 90,
      // depth: 10,
      // modifier: 5.5,
      slideShadows: false,
    },

    // Ширина экрана
    breakpoints: {
      320: {
        stretch: 90,
        depth: 10,
        modifier: 5.5,
      },

      480: {

      },
    }

  });

}