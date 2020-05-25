/**
 * Habilita la carga diferida de imágenes:
 *   - Primero comprueba si el atributo loading está disponible
 *   - Si no lo está, comprueba si está disponible IntersectionObserver
 *   - Si tampoco lo está, pues no hace un lazyLoad
 * @return void
 */
export default function initLazyload() {
  const images = document.querySelectorAll("img[loading]");

  if (!images.length) return;

  if ("loading" in HTMLImageElement.prototype) {
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.srcset = img.dataset.srcset;
      img.sizes = img.dataset.sizes;
    });

    return;
  }

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            console.log(entry.isIntersecting);
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.sizes = lazyImage.dataset.sizes;
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      }
    );

    [].slice.call(images).forEach(function (img) {
      lazyImageObserver.observe(img);
    });

    return;
  }

  // Please, update your browser if it's possible...
  images.forEach((img) => {
    img.src = img.dataset.src;
    img.srcset = img.dataset.srcset;
    img.sizes = img.dataset.sizes;
  });
}
