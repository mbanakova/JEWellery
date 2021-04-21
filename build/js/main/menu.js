'use strict';
(function () {
  var burger = document.querySelector('.header__burger');
  var header = document.querySelector('header');

  if (header) {
    document.querySelector('.header').classList.add('header--js');
    document.querySelector('.header').classList.add('header--close');

    if (burger) {
      burger.addEventListener('click', function () {
        header.classList.toggle('header--close');
      });
    }

    var items = document.querySelectorAll('.faq__item');

    if (items.length > 0) {
      items.forEach(function (item) {
        item.classList.add('js-hidden');
        item.addEventListener('click', function () {
          var title = item.querySelector('h3');
          var height = title.nextElementSibling.scrollHeight;
          title.classList.toggle('active');
          if (title.classList.contains('active')) {
            title.nextElementSibling.style.maxHeight = height + 'px';
          } else {
            title.nextElementSibling.style.maxHeight = 0;
          }
        });
      });
    }
  }
})();
