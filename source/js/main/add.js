'use strict';
(function () {
  // add to cart modal
  var addBtn = document.querySelector('.jewel__add-link');
  var addModal = document.querySelector('.add');

  if (addBtn) {
    addBtn.addEventListener('click', function (event) {
      event.preventDefault();
      addModal.classList.add('add--open');
    });
  }

  if (addModal) {
    var overlay = document.querySelector('.add__overlay');
    var closeBtn = document.querySelector('#add-close');
    // закрыть через Esc
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        if (addModal.classList.contains('add--open')) {
          event.preventDefault();
          addModal.classList.remove('add--open');
        }
      }
    });
    // Закрыть по клику снаружи
    overlay.addEventListener('click', function (elem) {
      if (elem.target === overlay && elem.target !== addModal) {
        addModal.classList.remove('add--open');
      }
    });

    // закрыть крестиком
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        addModal.classList.remove('add--open');
      });
    }
  }
})();
