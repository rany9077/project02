var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".swiper-container", {
  loop: true,
  autoplay: 5500,
  autoplayDisableOnInteraction: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
