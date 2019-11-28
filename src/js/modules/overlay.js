'use strict';

(function () {
  var OVERLAY_CLASS = 'overlay';

  var overlayElement = document.querySelector('.' + OVERLAY_CLASS);

  if (overlayElement) {
    var overlayClickHandler = function () {
      window.util.closePopup();
    };

    overlayElement.addEventListener('click', overlayClickHandler, {passive: true});
  }
})();
