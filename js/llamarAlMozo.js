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




// Crear el título h1
var tituloH1 = document.createElement("h1");
tituloH1.textContent = "¿Deseas llamar al mozo?";
tituloH1.classList.add("mi-clase-h1");

// Crear el título h2
var tituloH2 = document.createElement("h2");
tituloH2.textContent = "Completa a continuación";
tituloH2.classList.add("mi-clase-h2");

// Obtener el cuerpo del documento (body)
var body = document.body;

// Agregar los títulos al inicio del cuerpo
body.insertBefore(tituloH2, body.firstChild);
body.insertBefore(tituloH1, body.firstChild);

// Crear el botón "Home"
var homeButton = document.createElement("div");
homeButton.textContent = "MENU PRINCIPAL";
homeButton.id = "homeButton"; // Asignar el ID para aplicar los estilos CSS
homeButton.classList.add("boton-seleccion"); // Agregar la clase existente para mantener el estilo

// Agregar el evento de click al botón "Home" para que refresque la página
homeButton.addEventListener("click", function () {

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
  apiKey: "AIzaSyBdYZYJRiUsC_v1jcKf9d248qJOYpUCyPI",
  authDomain: "hijosdelvientoservidor.firebaseapp.com",
  databaseURL: "https://hijosdelvientoservidor-default-rtdb.firebaseio.com",
  projectId: "hijosdelvientoservidor",
  storageBucket: "hijosdelvientoservidor.appspot.com",
  messagingSenderId: "197693769307",
  appId: "1:197693769307:web:add02b297e9143fc97e17e",
  measurementId: "G-0GH7Y8NV0P",
};
firebase.initializeApp(firebaseConfig);

var datosUsuarioElemento = document.getElementById("datos_usuario1");
datosUsuarioElemento.style.display = "block";

var botonPedido = document.getElementById("boton_mozo");
botonPedido.style.display = "block";

function obtenerDetallesPedido() {
  var detallesPedido = [];
  var llamadaAlMozo = {
    nombre: "🚨¡LLAMANDO MOZO!🚨",
    cantidad: "", // Puedes establecer la cantidad que desees
  };

  detallesPedido.push(llamadaAlMozo);

  return detallesPedido;
}

function enviarPedido() {
    // Obtener los valores de los campos Nombre y Mesa N°
    var nombre = document.getElementById("nombre_usuario1").value;
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
      if (result.isConfirmed) {
        // Obtén los valores de los elementos necesarios para el pedido
        const nombreUsuario = document.getElementById("nombre_usuario1").value;
        const numeroMesa = document.getElementById("numero_mesa").value;
        var detallesPedido = obtenerDetallesPedido();
  
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
            Swal.fire({
              title: "El Mozo está en camino",
              text: "¡Le agradecemos su visita!",
              icon: "success",
              customClass: {
                container: "cartelConfirmaPedido",
              },
            }).then(() => {
              location.reload(); // Reiniciar la página
            });
          }
        });
      }
    });
  }
  