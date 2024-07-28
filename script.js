var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 5,
  speed:500,
  preventClicks:true,
  noSwiping:true,
  centerSlide:'true',
  freeMode:false,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  }
//  breakpoints:{
//   800:{
//     slidesPerView:1,
//     spaceBetween:10,},
//   950:{
//     slidesPerView:4 ,
//     spaceBetween:30,},  
//   1200:{
//     slidesPerView:1,
//     spaceBetween:30,},
//  }
});
