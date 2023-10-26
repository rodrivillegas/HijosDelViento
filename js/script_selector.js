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
    cargarScript(
      "./js/haceTuOrdenComidaDelivery.js",
      mostrarFiltroSelector,
      mostrarBotonIrAlFinal
    );
  } else if (tipo === "haceTuOrdenBebidaDelivery") {
    cargarScript(
      "./js/haceTuOrdenBebidaDelivery.js",
      mostrarFiltroSelector1,
      mostrarBotonIrAlFinal
    );
  } else if (tipo === "haceTuOrdenBebidaEnBar") {
    cargarScript(
      "./js/haceTuOrdenBebidaEnBar.js",
      mostrarFiltroSelector1,
      mostrarBotonIrAlFinal
    );
  } else if (tipo === "haceTuOrdenComidaEnBar") {
    cargarScript(
      "./js/haceTuOrdenComidaEnBar.js",
      mostrarFiltroSelector,
      mostrarBotonIrAlFinal
    );
  } else if (tipo === "llamarAlMozo") {
    cargarScript("./js/llamarAlMozo.js", mostrarVentanaEmergente);
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

// Función para mostrar la ventana emergente
function mostrarVentanaEmergente() {
  console.log("Función mostrarVentanaEmergente llamada"); // Agrega este console.log

  // Crear el div para la ventana emergente
  var ventanaEmergente = document.createElement("div");
  ventanaEmergente.classList.add("ventana-emergente");

  // Crear la imagen de la publicidad
  var imagenPublicidad = document.createElement("img");
  imagenPublicidad.src = "../assets/fondoHDV.jpg"; // Reemplaza con la URL de tu imagen
  ventanaEmergente.appendChild(imagenPublicidad);

  // Crear el botón para cerrar la ventana emergente
  var cerrarBoton = document.createElement("button");
  cerrarBoton.textContent = "Cerrar";
  cerrarBoton.addEventListener("click", function () {
    ventanaEmergente.style.display = "none";
  });
  ventanaEmergente.appendChild(cerrarBoton);

  // Agregar la ventana emergente al cuerpo del documento
  document.body.appendChild(ventanaEmergente);
}