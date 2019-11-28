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
