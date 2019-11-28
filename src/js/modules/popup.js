'use strict';

(function () {
  var POPUP_CLASS = 'popup';
  var POPUP_CLOSE_CLASS = 'popup__close';

  var popupElement = document.querySelector('.' + POPUP_CLASS);

  if (popupElement) {
    var escKeyPressHandler = function (evt) {
      if (evt.keyCode !== window.util.ESC_KEY_CODE) {
        return;
      }

      evt.preventDefault();
      window.util.closePopup();
    };

    window.addEventListener('keydown', escKeyPressHandler);
  }

  var popupCloseElement = popupElement.querySelector('.' + POPUP_CLOSE_CLASS);

  if (popupCloseElement) {
    var closeButtonClickHandler = function () {
      window.util.closePopup();
    };

    popupCloseElement.addEventListener('click', closeButtonClickHandler, {passive: true});
  }
})();
