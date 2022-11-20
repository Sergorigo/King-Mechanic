// ---------------------Анимация первого блока------------
// Анимация логотипа
gsap.from('.top-menu__logo-box', { opacity: 0, duration: 1.5, delay: 0.5, x: '-20%' });
// Анимация заголовка
gsap.from('.any-repair__title', { opacity: 0, duration: 1.5, delay: 0.5, y: '20%' });
// Анимация навигационных стрелок
gsap.from('.any-repair__bottom-arrow', { opacity: 0, duration: 0.5, delay: 1, y: '-10%' });

// Анимация телефонной трубки
const tlCallUs = gsap.timeline({ defaults: { duration: 0.1 }, repeat: -1, repeatDelay: 3 });
tlCallUs.from('.top-menu__phone', { rotate: 10 })
   .to('.top-menu__phone', { rotate: -10 })
   .to('.top-menu__phone', { rotate: 10 })
   .to('.top-menu__phone', { rotate: -10 })
   .to('.top-menu__phone', { rotate: 10 })
   .to('.top-menu__phone', { rotate: -10 })
   .to('.top-menu__phone', { rotate: 10 })
   .to('.top-menu__phone', { rotate: -10 })
   .to('.top-menu__phone', { rotate: 10 })
   .to('.top-menu__phone', { rotate: 0 });
