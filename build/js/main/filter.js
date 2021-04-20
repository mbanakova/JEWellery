"use strict";
(function () {
  // filter
  var filter = document.querySelector(".catalog__filter-wrap");
  var filterToggle = document.querySelector(".catalog__button");
  var filterClose = document.querySelector(".filter__close");
  var fieldsets = document.querySelectorAll("fieldset");
  var filterParams = document.querySelectorAll();

  if (filter) {
    filter.classList.add("catalog__filter-wrap--js");
  }

  if (filterToggle) {
    filterToggle.addEventListener("click", function () {
      filter.classList.toggle("catalog__filter-wrap--open");
      filter.classList.toggle("catalog__filter-wrap--js");
    });
  }

  if (filterClose) {
    filterClose.addEventListener("click", function () {
      filter.classList.remove("catalog__filter-wrap--open");
      filter.classList.add("catalog__filter-wrap--js");
    });
  }

  console.log(fieldsets);
  if (fieldsets) {
    fieldsets.forEach(fieldset, function () {
      fieldset.classList.add("js-toggle");
    });
  }
})();
