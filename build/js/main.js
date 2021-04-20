"use strict";
(function () {
  // add to cart modal
  var body = document.querySelector("body");
  var addBtn = document.querySelector(".jewel__add-link");
  var addModal = document.querySelector(".add");

  if (addBtn) {
    addBtn.addEventListener("click", function (event) {
      event.preventDefault();
      addModal.classList.add("add--open");
      body.classList.add("js-noscroll");
    });
  }

  if (addModal) {
    var overlay = document.querySelector(".add__overlay");
    var closeBtn = document.querySelector("#add-close");
    // закрыть через Esc
    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (addModal.classList.contains("add--open")) {
          event.preventDefault();
          addModal.classList.remove("add--open");
        }
      }
    });
    // Закрыть по клику снаружи
    overlay.addEventListener("click", function (elem) {
      if (elem.target === overlay && elem.target !== addModal) {
        addModal.classList.remove("add--open");
      }
    });

    // закрыть крестиком
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        addModal.classList.remove("add--open");
      });
    }
  }
})();

"use strict";
(function () {
  // filter
  var filter = document.querySelector(".catalog__filter-wrap");
  var filterToggle = document.querySelector(".catalog__button");
  var filterClose = document.querySelector(".filter__close");
  var fieldsets = document.querySelectorAll("fieldset");
  var filterParams = document.querySelectorAll(".filter__toggle");

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

  // if (fieldsets) {
  //   fieldsets.forEach(function (fieldset) {
  //     fieldset.classList.add("js-toggle");
  //   });
  // }

  if (filterParams) {
    filterParams.forEach(function (button) {
      button.addEventListener("click", function () {
        button.classList.toggle("filter__toggle--open");
      });
    });
  }
})();

"use strict";
(function () {
  // login modal
  var body = document.querySelector("body");
  var loginBtn = document.querySelectorAll(".js-login");
  var loginModal = document.querySelector(".login");
  var storageEmail = "";
  var email = document.querySelector("#user-email");
  var isStorageSupport = true;

  if (loginBtn) {
    loginBtn.forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.classList.add("login--open");
        body.classList.add("js-noscroll");

        if (storageEmail) {
          if (email) {
            email.value = storageEmail;
          }
        } else {
          email.focus();
        }
      });
    });
  }

  if (loginModal) {
    var overlay = document.querySelector(".login__overlay");
    var closeBtn = document.querySelector("#login-close");
    var loginForm = document.querySelector(".modal-form");

    try {
      storageEmail = localStorage.getItem("email");
    } catch (err) {
      isStorageSupport = false;
    }

    // закрыть через Esc
    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (loginModal.classList.contains("login--open")) {
          event.preventDefault();
          loginModal.classList.remove("login--open");
        }
      }
    });

    // Закрыть по клику снаружи
    overlay.addEventListener("click", function (elem) {
      if (elem.target === overlay && elem.target !== loginModal) {
        loginModal.classList.remove("login--open");
      }
    });

    // закрыть крестиком
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        loginModal.classList.remove("login--open");
      });
    }

    // запись email при отправке
    if (loginForm) {
      loginForm.addEventListener("submit", function () {
        if (isStorageSupport) {
          localStorage.setItem("email", email.value);
        }
      });
    }
  }
})();

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
            return '<li class=\''.concat(currentClass, '\' type=\'button\'>0').concat(index, '</li> of <li class=\'').concat(totalClass, '\' type=\'button\'>0').concat(total, '</li>');
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
