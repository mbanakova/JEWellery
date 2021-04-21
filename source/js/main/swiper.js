'use strict';

(function () {
  new window.Swiper('.swiper-container', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    speed: 1000,
    freeMode: true,
    autoHeight: true,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<li class=\''.concat(className, '\'>').concat(index + 1, '</li>');
      }
    },
    lazy: {
      loadPrevNext: true
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: 'fraction',
          renderFraction: function renderFraction(currentClass, totalClass, index, total) {
            return '<li class=\''.concat(currentClass, '\' type=\'button\'>0').concat(index, '</li> of <li~npm test class=\'').concat(totalClass, '\' type=\'button\'>0').concat(total, '</li>');
          }
        }
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: 'bullets'
        }
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          type: 'bullets'
        }
      }
    }
  });
})();
