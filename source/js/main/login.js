'use strict';
(function () {
  // login modal
  var body = document.querySelector('body');
  var loginBtn = document.querySelectorAll('.js-login');
  var loginModal = document.querySelector('.login');
  var storageEmail = '';
  var email = document.querySelector('#user-email');
  var isStorageSupport = true;

  if (loginBtn) {
    loginBtn.forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        event.preventDefault();
        loginModal.classList.add('login--open');
        body.classList.add('js-noscroll');

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
    var overlay = document.querySelector('.login__overlay');
    var closeBtn = document.querySelector('#login-close');
    var loginForm = document.querySelector('.modal-form');

    try {
      storageEmail = localStorage.getItem('email');
    } catch (err) {
      isStorageSupport = false;
    }

    // закрыть через Esc
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        if (loginModal.classList.contains('login--open')) {
          event.preventDefault();
          loginModal.classList.remove('login--open');
        }
      }
    });

    // Закрыть по клику снаружи
    overlay.addEventListener('click', function (elem) {
      if (elem.target === overlay && elem.target !== loginModal) {
        loginModal.classList.remove('login--open');
      }
    });

    // закрыть крестиком
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        loginModal.classList.remove('login--open');
      });
    }

    // запись email при отправке
    if (loginForm) {
      loginForm.addEventListener('submit', function () {
        if (isStorageSupport) {
          localStorage.setItem('email', email.value);
        }
      });
    }
  }
})();
