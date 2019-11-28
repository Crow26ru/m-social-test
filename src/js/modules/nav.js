'use strict';

(function () {
  var OPEN_POPUP_LINK_ID = 'invite-popup-link';

  var linkElement = document.querySelector('#' + OPEN_POPUP_LINK_ID);

  if (linkElement) {
    var linkClickHandler = function (evt) {
      evt.preventDefault();

      window.util.openPopup();
    };

    linkElement.addEventListener('click', linkClickHandler);
  }
})();
