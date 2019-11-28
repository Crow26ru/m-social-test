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

'use strict';

(function () {
  window.svg4everybody();
})();

'use strict';

(function () {
  var PERSON_LIST_CLASS = 'popup__person-list';
  var SCROLLER_CLASS = 'popup__scroller';

  var personListElement = document.querySelector('.' + PERSON_LIST_CLASS);
  var scrollerElement = document.querySelector('.' + SCROLLER_CLASS);

  if (personListElement && scrollerElement) {
    // Задаем высоту скроллера
    var scrollBarElement = scrollerElement.parentNode;
    scrollerElement.style.height = personListElement.clientHeight / personListElement.scrollHeight * scrollBarElement.clientHeight + 'px';

    var maxScrollTop = personListElement.scrollHeight - personListElement.clientHeight;
    var maxTopPositionScroller = scrollBarElement.clientHeight - scrollerElement.clientHeight;

    var scrollHandler = function (evt) {
      scrollerElement.style.top = evt.currentTarget.scrollTop / maxScrollTop * maxTopPositionScroller + 'px';
    };

    var resizeHandler = function () {
      scrollerElement.style.height = personListElement.clientHeight / personListElement.scrollHeight * scrollBarElement.clientHeight + 'px';
      maxScrollTop = personListElement.scrollHeight - personListElement.clientHeight;
      maxTopPositionScroller = scrollBarElement.clientHeight - scrollerElement.clientHeight;
    };

    personListElement.addEventListener('scroll', scrollHandler, {passive: true});
    window.addEventListener('resize', resizeHandler, {passive: true});
  }
})();

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
