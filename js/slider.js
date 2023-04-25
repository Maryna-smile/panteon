const swiper = new Swiper(".swiper", {
  loop: true,

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

  touchRatio: 2,
  slideToClickedSlide: true,
  grabCursor: true,
  slidesPerView: 2.5,
  spaceBetween: 60,
  
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1.2,
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 1.5,
      spaceBetween: 45,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 2.8,
      spaceBetween: 10,
    }
  },
 
});
