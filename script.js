var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

});
