// Переключатель слайдеров

let tabNavItem = document.querySelectorAll('.submenu__item');
let tabContentItem = document.querySelectorAll('.gallery__slider');

tabNavItem.forEach(function (elem) {
   elem.addEventListener('click', activeTab);
})

function activeTab() {
   tabNavItem.forEach(function (elem) {
      elem.classList.remove('active');
   })
   this.classList.add('active');
   let tabName = this.getAttribute('data-tab');

   activeTabContent(tabName);
}

function activeTabContent(tabName) {
   tabContentItem.forEach(function (item) {
      if (item.classList.contains(tabName)) {
         item.classList.add('on');
      } else {
         item.classList.remove('on');
      }
   })
}