import initPhotoswipe from "./modules/initPhotoswipe";

/**
 * @desc Determina el elemento que está recibiendo el evento a través de éste
 * @param {Event} e Evento disparado en un elemento
 * @return HTMLElement con el elemento que ha recibido el evento
 */
const getEventTarget = (e) => {
  e = e || window.event;

  return e.target || e.srcElement;
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("%cBienvenid@ a Regazo Fotografía", "font-weight: bold; font-size: 1.5rem; color: #2a4365;");
  console.log(
    "%cVeo que estás echando un vistazo por aquí, si quieres saber más sobre cómo está construida esta web visita https://www.regazofotografia.com/notas-del-desarrolador",
    "font-size: 1.25rem; color: #2a4365;"
  );
  console.log(
    "%cSi estás inspeccionado el código porque quieres copiar una imagen, recuerda que tienes que pedir permiso para utilizarla, no seas mal@: https://www.regazofotografia.com/#contacta-conmigo",
    "font-size: 1.25rem; color: #e53e3e;"
  );

  initPhotoswipe();
});

document.addEventListener("contextmenu", (event) => {
  if (getEventTarget(event).tagName.toLowerCase() === "img") {
    event.preventDefault();
  }
});
