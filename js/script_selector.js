var animationContainer = document.getElementById("animation-container");
var content = document.getElementById("content");
var seleccionadorTragos = document.getElementById("opcionesBotones");

// Ocultar el contenido y los botones de selección de tragos por defecto
content.style.display = "none";
seleccionadorTragos.style.display = "none";

// Esperar a que la animación termine y luego mostrar el contenido y los botones de selección de tragos
animationContainer.addEventListener("animationend", function () {
  animationContainer.style.display = "none";
  content.style.display = "block";
  seleccionadorTragos.style.display = "block";
});

// Función para mostrar el filtro selector
function mostrarFiltroSelector() {
  var filtroSelector = document.getElementById("filtro-selector");
  filtroSelector.style.display = "block";
}

function mostrarFiltroSelector1() {
  var filtroSelector = document.getElementById("filtro-selector1");
  filtroSelector.style.display = "block";
}

function mostrarBotonIrAlFinal() {
  var filtroSelector = document.getElementById("scroll-to-bottom-button");
  filtroSelector.style.display = "block";
}

// Función para cargar y mostrar el filtro selector
function mostrarOpciones(tipo) {
  document.getElementById("opcionesBotones").style.display = "none";
  content.style.display = "block";
  animationContainer.style.display = "none";

  if (tipo === "haceTuOrdenComidaDelivery") {
    mostrarPopUpComidasDelivery(function () {
      cargarScript(
        "./js/haceTuOrdenComidaDelivery.js",
        mostrarFiltroSelector,
        mostrarBotonIrAlFinal
      );
    });
  } else if (tipo === "haceTuOrdenBebidaDelivery") {
    mostrarPopUpBebidas(function () {
      cargarScript(
        "./js/haceTuOrdenBebidaDelivery.js",
        mostrarFiltroSelector1,
        mostrarBotonIrAlFinal
      );
    });
  } else if (tipo === "haceTuOrdenBebidaEnBar") {
    mostrarPopUpBebidas(function () {
      cargarScript(
        "./js/haceTuOrdenBebidaEnBar.js",
        mostrarFiltroSelector1,
        mostrarBotonIrAlFinal
      );
    });
  } else if (tipo === "haceTuOrdenComidaEnBar") {
    mostrarPopUpComidasBar(function () {
      cargarScript(
        "./js/haceTuOrdenComidaEnBar.js",
        mostrarFiltroSelector,
        mostrarBotonIrAlFinal
      );
    });
  } else if (tipo === "llamarAlMozo") {
    cargarScript("./js/llamarAlMozo.js");
  } else if (tipo === "pedirLaCuenta") {
    var botonComentarios = document.getElementById("btnComentarios");
    botonComentarios.classList.add("mostrar");
    cargarScript("./js/pedirLaCuenta.js");
  }
}

// Función para cargar un script en el documento y llamar a una función cuando esté cargado
function cargarScript(url, callback) {
  var script = document.createElement("script");
  script.src = url;
  script.onload = callback; // Llamar a la función cuando el script esté cargado
  document.head.appendChild(script);
}

function mostrarPopUpBebidas(callback) {
  // Crear el div para la ventana emergente
  var ventanaEmergente = document.createElement("div");
  ventanaEmergente.classList.add("ventana-emergenteBebidas");

  // Crear la imagen de la publicidad
  var imagenPublicidad = document.createElement("img");
  imagenPublicidad.src = "./assets/PopUpHeineken.jpg"; // Reemplaza con la URL de tu imagen
  ventanaEmergente.appendChild(imagenPublicidad);

  // Crear el botón para cerrar la ventana emergente
  var cerrarBoton = document.createElement("button");
  cerrarBoton.textContent = "Cerrar";
  cerrarBoton.addEventListener("click", function () {
    ventanaEmergente.style.display = "none";
    // Ejecutar el callback después de cerrar la ventana emergente
    if (typeof callback === "function") {
      callback();
    }
  });
  ventanaEmergente.appendChild(cerrarBoton);

  // Agregar la ventana emergente al cuerpo del documento
  document.body.appendChild(ventanaEmergente);
}

function mostrarPopUpComidasBar(callback) {
  // Crear el div para la ventana emergente
  var ventanaEmergente = document.createElement("div");
  ventanaEmergente.classList.add("ventana-emergenteComida");

  // Crear la imagen de la publicidad
  var imagenPublicidad = document.createElement("img");
  imagenPublicidad.src = "./assets/ComeRicoPubli.jpg"; // Reemplaza con la URL de tu imagen
  ventanaEmergente.appendChild(imagenPublicidad);

  // Crear el botón para cerrar la ventana emergente
  var cerrarBoton = document.createElement("button");
  cerrarBoton.textContent = "Cerrar";
  cerrarBoton.addEventListener("click", function () {
    ventanaEmergente.style.display = "none";
    // Ejecutar el callback después de cerrar la ventana emergente
    if (typeof callback === "function") {
      callback();
    }
  });
  ventanaEmergente.appendChild(cerrarBoton);

  // Agregar la ventana emergente al cuerpo del documento
  document.body.appendChild(ventanaEmergente);
}

function mostrarPopUpComidasDelivery(callback) {
  // Crear el div para la ventana emergente
  var ventanaEmergente = document.createElement("div");
  ventanaEmergente.classList.add("ventana-emergenteComida");

  // Crear la imagen de la publicidad
  var imagenPublicidad = document.createElement("img");
  imagenPublicidad.src = "./assets/AbiertoPubli.jpg"; // Reemplaza con la URL de tu imagen
  ventanaEmergente.appendChild(imagenPublicidad);

  // Crear el botón para cerrar la ventana emergente
  var cerrarBoton = document.createElement("button");
  cerrarBoton.textContent = "Cerrar";
  cerrarBoton.addEventListener("click", function () {
    ventanaEmergente.style.display = "none";
    // Ejecutar el callback después de cerrar la ventana emergente
    if (typeof callback === "function") {
      callback();
    }
  });
  ventanaEmergente.appendChild(cerrarBoton);

  // Agregar la ventana emergente al cuerpo del documento
  document.body.appendChild(ventanaEmergente);
}

function mostrarPopUpInicio(imagenes, callback) {
  // Crear el div para la ventana emergente
  var ventanaEmergente = document.createElement("div");
  ventanaEmergente.classList.add("ventana-emergenteInicio");

  // Generar un índice aleatorio para seleccionar una imagen
  var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  
  // Crear la imagen de la publicidad con la URL seleccionada aleatoriamente
  var imagenPublicidad = document.createElement("img");
  imagenPublicidad.src = imagenes[indiceAleatorio];
  ventanaEmergente.appendChild(imagenPublicidad);

  // Crear el botón para cerrar la ventana emergente
  var cerrarBoton = document.createElement("button");
  cerrarBoton.textContent = "Cerrar";
  cerrarBoton.addEventListener("click", function () {
    ventanaEmergente.style.display = "none";
    // Ejecutar el callback después de cerrar la ventana emergente
    if (typeof callback === "function") {
      callback();
    }
  });
  ventanaEmergente.appendChild(cerrarBoton);

  // Agregar la ventana emergente al cuerpo del documento
  document.body.appendChild(ventanaEmergente);
}

// Ejemplo de uso
var imagenesPopUp = [
  "./assets/comeBienPubli.jpg",
  "./assets/BuenaGentePubli.jpg",
  "./assets/NoTeComasCualquieraPubli.jpg",
  "./assets/PopUpComidas.jpg",
  "./assets/ComeRicoMilaPubli.jpg",

  // Agrega aquí más URL de imágenes
];

mostrarPopUpInicio(imagenesPopUp);


function solicitarContrasena() {
  Swal.fire({
    title: 'Ingrese la contraseña',
    input: 'password',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Acceder',
    showLoaderOnConfirm: true,
    preConfirm: (contrasena) => {
      // Comprueba si la contraseña es correcta
      if (contrasena === 'Lucas2023') { // Reemplaza 'tucontrasena' con la contraseña deseada
        return true;
      } else {
        Swal.showValidationMessage('Contraseña incorrecta. Acceso denegado.');
        return false;
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
    customClass: {
      popup: 'swal-custom' // Agrega la clase personalizada al cuadro de diálogo
    }
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'src/indexServidor.html'; // Redirige si la contraseña es correcta
    }
  });
}

