var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 5,
  speed:500,
  loop: true,
  preventClicks:true,
  noSwiping:true,
  centerSlide:'true',
  freeMode:false,
  grabCursor: true,

  pagination:{
    el:".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
 breakpoints:{
  600:{
    slidesPerView:1,
    spaceBetween:10,},
  950:{
    slidesPerView:2 ,
    spaceBetween:50,}
 }
});
