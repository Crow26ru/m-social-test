'use strict';

(function () {
  var POPUP_CLASS = 'popup';
  var POPUP_OPEN_CLASS = 'popup--open';
  var POPUP_SEARCH_INPUT_CLASS = 'popup__search-input';
  var OVERLAY_CLASS = 'overlay';
  var OVERLAY_SHOW_CLASS = 'overlay--show';
  var ESC_KEY_CODE = 27;

  var closePopup = function () {
    var popupElement = document.querySelector('.' + POPUP_CLASS);
    var overlayElement = document.querySelector('.' + OVERLAY_CLASS);

    if (popupElement.classList.contains(POPUP_OPEN_CLASS) && overlayElement.classList.contains(OVERLAY_SHOW_CLASS)) {
      popupElement.classList.remove(POPUP_OPEN_CLASS);
      overlayElement.classList.remove(OVERLAY_SHOW_CLASS);
    }
  };

  var openPopup = function () {
    var popupElement = document.querySelector('.' + POPUP_CLASS);
    var overlayElement = document.querySelector('.' + OVERLAY_CLASS);

    if (!popupElement.classList.contains(POPUP_OPEN_CLASS) && !overlayElement.classList.contains(OVERLAY_SHOW_CLASS)) {
      popupElement.classList.add(POPUP_OPEN_CLASS);
      overlayElement.classList.add(OVERLAY_SHOW_CLASS);

      var inputElement = popupElement.querySelector('.' + POPUP_SEARCH_INPUT_CLASS + ' input');
      inputElement.focus();
    }
  };

  window.util = {
    ESC_KEY_CODE: ESC_KEY_CODE,
    closePopup: closePopup,
    openPopup: openPopup
  };
})();
