const swiper = new Swiper(".swiper", {
  effect: "fade",
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper("swiper-container", {
  loop: true,
  autoplay: 5500,
  autoplayDisableOnInteraction: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
