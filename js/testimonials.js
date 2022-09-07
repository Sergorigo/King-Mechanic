new Swiper('.feedback__content', {
   navigation: {
      prevEl: '.feedback__prev',
      nextEl: '.feedback__next'
   },
   // пагинация 
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
   },

   // видимых слайдов
   slidesPerView: 2,
   // бесконечность слайдера 
   loop: true,
   // листание слайдов колесом мыши
   mousewheel: {
      sensitivity: 1,
   },
   // отступ между слайдами
   spaceBetween: 24,
   //  по сколько слайдов листать 
   slidesPerGroup: 1,
   //  настройка активного слайда по центру
   centeredSlides: true,
   // скорость движения слайдов
   speed: 1000,

   effect: 'coverflow',
   coverflowEffect: {
      rotate: 20,
      stretch: 10,
      slideShadow: false,
   },

});