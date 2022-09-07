// слайдер для галереи
new Swiper('.gallery__slider', {
   navigation: {
      nextEl: '.gallery__right',
      prevEl: '.gallery__left'
   },

   // pagination: {
   //    el: 'swiper-pagination',
   //    clickable: true,
   // },
   // свойство бесконечности слайдера
   loop: true,
   // автопрокрутка слайдов
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   // скорость переключения слайдов 
   speed: 1000,
   // эффект кубика
   effect: 'cube',
   cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffSet: 200,
      shadowScale: 0.94,
   },

   observer: true,

});

