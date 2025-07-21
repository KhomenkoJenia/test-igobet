document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".custom-swiper", {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 10,
    centeredSlides: false,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true,
      },

      768: {
        slidesPerView: 2.5,
        centeredSlides: false,
      },
    },
  });
});
