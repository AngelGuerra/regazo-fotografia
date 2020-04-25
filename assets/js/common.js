"use strict";

(function () {
  /**
   * @desc Determina el elemento que está recibiendo el evento a través de éste
   * @param {Event} e Evento disparado en un elemento
   * @return HTMLElement con el elemento que ha recibido el evento
   */
  var getEventTarget = function (e) {
    e = e || window.event;

    return e.target || e.srcElement;
  };

  document.addEventListener("contextmenu", function (event) {
    if (getEventTarget(event).tagName.toLowerCase() === "img") event.preventDefault();
  });
})();
