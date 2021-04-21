'use strict';
(function () {
  // filter
  var filter = document.querySelector('.catalog__filter-wrap');
  var filterToggle = document.querySelector('.catalog__button');
  var filterClose = document.querySelector('.filter__close');
  var filterParams = document.querySelectorAll('.filter__toggle');

  if (filter) {
    filter.classList.add('catalog__filter-wrap--js');
  }

  if (filterToggle) {
    filterToggle.addEventListener('click', function () {
      filter.classList.toggle('catalog__filter-wrap--open');
      filter.classList.toggle('catalog__filter-wrap--js');
    });
  }

  if (filterClose) {
    filterClose.addEventListener('click', function () {
      filter.classList.remove('catalog__filter-wrap--open');
      filter.classList.add('catalog__filter-wrap--js');
    });
  }

  if (filterParams) {
    filterParams.forEach(function (button) {
      button.addEventListener('click', function () {
        button.classList.toggle('filter__toggle--open');
      });
    });
  }
})();
