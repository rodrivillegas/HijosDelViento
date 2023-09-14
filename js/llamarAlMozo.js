// Función para ocultar y mostrar la animación GIF
function toggleGifVisibility(show) {
  var gifContainer = document.getElementById("gif-container");
  if (show) {
    gifContainer.style.display = "block";
  } else {
    gifContainer.style.display = "none";
  }
}

// Crear un elemento de div para la imagen
var gifContainer = document.createElement("div"); // Cambiar el ID a un nombre único
gifContainer.id = "gif-container";
document.body.appendChild(gifContainer);

// Crear un elemento de imagen
var imagen = document.createElement("img");

// Asignar la fuente de la imagen
imagen.src = "assets/fuegoAnim.gif";

// Asignar un ID y una clase (opcional)
imagen.id = "animacion-imagen";
imagen.classList.add("mi-clase-imagen");

// Establecer estilos CSS para la imagen
imagen.style.width = "50rem"; // Cambia el ancho según tus necesidades
imagen.style.height = "55rem"; // Cambia la altura según tus necesidades
imagen.style.position = "fixed";
imagen.style.top = "50%";
imagen.style.left = "50%";
imagen.style.transform = "translate(-50%, -50%)";
imagen.style.zIndex = "9999";
imagen.style.pointerEvents = "none";

// Agregar la imagen al contenedor de animación
gifContainer.appendChild(imagen);

// Crear el título h1
var tituloH1 = document.createElement("h1");
tituloH1.textContent = "¿Deseas llamar al mozo?";
tituloH1.classList.add("mi-clase-h1");

// Crear el título h2
var tituloH2 = document.createElement("h2");
tituloH2.textContent = "Completa los siguientes campos:";
tituloH2.classList.add("mi-clase-h2");

// Obtener el cuerpo del documento (body)
var body = document.body;

// Agregar los títulos al inicio del cuerpo
body.insertBefore(tituloH2, body.firstChild);
body.insertBefore(tituloH1, body.firstChild);

// Crear el botón "Home"
var homeButton = document.createElement("div");
homeButton.textContent = "REGRESAR 🏡";
homeButton.id = "homeButton"; // Asignar el ID para aplicar los estilos CSS
homeButton.classList.add("boton-seleccion"); // Agregar la clase existente para mantener el estilo

// Agregar el evento de click al botón "Home" para que refresque la página
homeButton.addEventListener("click", function () {
  // Ocultar la animación GIF
  toggleGifVisibility(false);

  // Mostrar el SweetAlert2 con el mensaje de advertencia
  Swal.fire({
    title: "¿Seguro quieres volver al menú principal?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    customClass: {
      container: "cartelConfirmaPedido",
    },
  }).then((result) => {
    // Mostrar nuevamente la animación GIF cuando se cierre el Swal.fire
    toggleGifVisibility(true);

    // Si el usuario hace clic en "Aceptar" en el SweetAlert2, entonces recargamos la página
    if (result.isConfirmed) {
      location.reload();
    }
  });
});

// Agregar el botón "Home" al contenedor deseado (por ejemplo, el cuerpo del documento)
document.body.appendChild(homeButton);

var listaOrden = document.getElementById("orden_lista");
const firebaseConfig = {
  apiKey: "AIzaSyDYoPl8tTmHs1skLtP264ooxE4xEiWGh2w",
  authDomain: "pedidoslablonda.firebaseapp.com",
  databaseURL: "https://pedidoslablonda-default-rtdb.firebaseio.com",
  projectId: "pedidoslablonda",
  storageBucket: "pedidoslablonda.appspot.com",
  messagingSenderId: "392418607897",
  appId: "1:392418607897:web:10767371cbcf65b0a13b88",
};
firebase.initializeApp(firebaseConfig);

var datosUsuarioElemento = document.getElementById("datos_usuario");
datosUsuarioElemento.style.display = "block";

var botonPedido = document.getElementById("boton_mozo");
botonPedido.style.display = "block";

function obtenerDetallesPedido() {
  var detallesPedido = [];
  var llamadaAlMozo = {
    nombre: "¡LLAMANDO MOZO! 💁🏽‍♂️💁🏽‍♀️",
    cantidad: "", // Puedes establecer la cantidad que desees
  };

  detallesPedido.push(llamadaAlMozo);

  return detallesPedido;
}

function enviarPedido() {
  // Obtener los valores de los campos Nombre y Mesa N°
  var nombre = document.getElementById("nombre_usuario").value;
  var mesa = document.getElementById("numero_mesa").value;

  // Verificar si los campos están vacíos
  if (nombre === "" || mesa === "") {
    // Mostrar mensaje de alerta personalizado
    var mensaje =
      'Completa los campos con tu "Nombre" y el "N° de MESA"\n (lo encuentras en el QR que escaneas).';

    Toastify({
      text: mensaje,
      duration: 4000,
      gravity: "top",
      position: "right",
      className: "toastify",
      style: {
        background: "linear-gradient(to right, #FF4D4D, #FF9999)",
        "text-align": "center",
      },
    }).showToast();
    return; // Detener la ejecución del código
  }
  // Verificar si el número de mesa es válido (menor o igual a 199)
  if (mesa > 199) {
    // Mostrar mensaje de error personalizado
    var mensajeError = "El número de mesa no puede ser mayor a 199.";
    Toastify({
      text: mensajeError,
      duration: 4000,
      gravity: "top",
      position: "right",
      className: "toastify",
      style: {
        background: "linear-gradient(to right, #FF4D4D, #FF9999)",
        "text-align": "center",
      },
    }).showToast();
    return; // Detener la ejecución del código
  }
  var fechaActual = new Date();

  // Ocultar la animación GIF
  toggleGifVisibility(false);

  Swal.fire({
    title: "¿Estás seguro que deseas llamar al Mozo?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    customClass: {
      container: "cartelConfirmaPedido",
    },
  }).then((result) => {
    // Mostrar nuevamente la animación GIF cuando se cierre el Swal.fire
    toggleGifVisibility(true);

    if (result.isConfirmed) {
      // Obtén los valores de los elementos necesarios para el pedido
      const nombreUsuario = document.getElementById("nombre_usuario").value;
      const numeroMesa = document.getElementById("numero_mesa").value;
      var detallesPedido = obtenerDetallesPedido();
      var comentarios = document.getElementById("campo_comentarios").value;

      // Formatear la fecha actual
      var fechaFormateada =
        fechaActual.getDate() +
        "/" +
        (fechaActual.getMonth() + 1) +
        "/" +
        fechaActual.getFullYear();

      // Formatear la hora actual
      var horaFormateada =
        fechaActual.getHours().toString().padStart(2, "0") +
        ":" +
        fechaActual.getMinutes().toString().padStart(2, "0") +
        ":" +
        fechaActual.getSeconds().toString().padStart(2, "0");

      // Crea el objeto de pedido con los detalles del usuario, la fecha y la hora
      const pedido = {
        nombreUsuario,
        numeroMesa,
        comentarios,
        detallesPedido,
        fecha: fechaFormateada, // Guardar la fecha formateada
        hora: horaFormateada, // Guardar la hora formateada
      };

      // Obtén una referencia a la base de datos de Firebase
      const database = firebase.database();

      // Agrega el pedido a la base de datos
      database.ref().push(pedido, (error) => {
        if (error) {
          console.error("Error al llamar al Mozo", error);
          Swal.fire({
            title: "Oops...!",
            text: "Hubo un error al llamar al Mozo",
            icon: "error",
            dangerMode: true,
          });
        } else {
          toggleGifVisibility(false);
          Swal.fire({
            title: "El Mozo está en camino",
            text: "¡Le agradecemos su visita!",
            icon: "success",
            customClass: {
              container: "cartelConfirmaPedido",
            },
          }).then(() => {
            toggleGifVisibility(true);
            location.reload(); // Reiniciar la página
          });
        }
      });
    }
  });
}
