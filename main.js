AOS.init();

// Seleccionamos el div por su id
var myDiv = document.querySelector('#myDiv');

// Configuramos la animación de AOS para el div
myDiv.setAttribute('data-aos', 'flip-left');

AOS.init({
    once: true, // Esto significa que la animación solo ocurrirá una vez cuando el elemento aparezca en la vista
  });