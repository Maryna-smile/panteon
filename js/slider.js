const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  keyboard: {
    enabled: true,
    onlyInVieport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate:20,
  //   stretch:50,
  //   slideShadow: true,
  // },

  touchRatio: 2,
  slideToClickedSlide: true,
  grabCursor: true,
  slidesPerView: 2.5,
  spaceBetween: 60,
  
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1.5,
  //   },
  //   360: {
  //     slidesPerView: 2.5,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //   }
  // },
 
});
