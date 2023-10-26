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

// Crear el título h1
var tituloH1 = document.createElement("h1");
tituloH1.textContent = "MENÚ DE BEBIDAS";
tituloH1.classList.add("mi-clase-h1");

// Obtener el cuerpo del documento (body)
var body = document.body;

// Agregar los títulos al inicio del cuerpo
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
    text: "Lo ordenado se borrará por completo.",
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

// Agregar el botón "Home" al contenedor deseado
document.body.appendChild(homeButton);

// Obtén una referencia al botón y al elemento final de la página
var scrollToBottomButton = document.getElementById("scrollToBottomButton");
var finalElement = document.getElementById("final-de-la-pagina");

// Agrega un evento de clic al botón
scrollToBottomButton.addEventListener("click", function () {
  // Usa smooth scrolling para desplazarse hacia el elemento final de la página
  finalElement.scrollIntoView({ behavior: "smooth" });
});

// Agrega un evento de scroll para mostrar u ocultar el botón
window.addEventListener("scroll", function () {
  // Si el usuario ha bajado lo suficiente, muestra el botón
  if (window.scrollY > 200) {
    scrollToBottomButton.style.display = "block";
  } else {
    scrollToBottomButton.style.display = "none";
  }
});

const productosJSON = `
{
  "Menu": [
    {
      "categoria": "CERVEZA",
      "genero": "IMPERIAL",
      "nombre": "IMPERIAL LAGER 1L",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/ImperialLager1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "IMPERIAL",
      "nombre": "IMPERIAL ROJA 1L",
      "descripcion": "",
      "precio": 1600,
      "imagen": "./assets/ImperialAmberLager1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "IMPERIAL",
      "nombre": "IMPERIAL IPA 1L",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/ImperialIpa1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "IMPERIAL",
      "nombre": "IMPERIAL APA 1L",
      "descripcion": "",
      "precio": 1600,
      "imagen": "./assets/ImperialApa1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "IMPERIAL",
      "nombre": "IMPERIAL NEGRA 1L",
      "descripcion": "",
      "precio": 800,
      "imagen": "./assets/ImperialNegra1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "IMPERIAL",
      "nombre": "IMPERIAL GOLDEN 1L",
      "descripcion": "",
      "precio": 1500,
      "imagen": "./assets/ImperialGolden1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "HEINEKEN",
      "nombre": "HEINEKEN 1L",
      "descripcion": "",
      "precio": 700,
      "imagen": "./assets/Heineken1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "GROLSCH",
      "nombre": "GROLSCH 1L",
      "descripcion": "",
      "precio": 700,
      "imagen": "./assets/Grolsch1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "SOL",
      "nombre": "SOL 710cc.",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Sol1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "MILLER",
      "nombre": "MILLER 1L",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Miller1L.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "MONJITA",
      "nombre": "MILLER 330cm3.",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Miller330cc.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "MONJITA",
      "nombre": "HEINEKEN 330cm3.",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Heineken330cc.png"
    },
    {
      "categoria": "CERVEZA",
      "genero": "MONJITA",
      "nombre": "HEINEKEN S/ALCOHOL 330cm3.",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/HeinekenSA330cc.png"
    },
    {
      "categoria": "SIN ALCOHOL",
      "genero": "GASEOSAS",
      "nombre": "GASEOSAS 350cc. (elije el sabor en los comentarios)",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Gaseosa.png"
    },
    {
      "categoria": "SIN ALCOHOL",
      "genero": "AGUA SABORIZADA",
      "nombre": "AGUA SABORIZADA 500cc. (elije el sabor en los comentarios)",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/AguaSaborizada500cc.png"
    },
    {
      "categoria": "SIN ALCOHOL",
      "genero": "AGUA SIN GAS",
      "nombre": "AGUA SIN GAS 500cc.",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Agua500cc.png"
    },
    {
      "categoria": "SIN ALCOHOL",
      "genero": "LIMONADA",
      "nombre": "LIMONADA",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Limonada.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "FERNET BRANCA",
      "nombre": "FERNET + COCA",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/FernetConCoca.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "GANCIA LIMON",
      "nombre": "GANCIA + LIMON",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/GanciaLimon.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "APEROL + SODA",
      "nombre": "APEROL",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Aperol.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "CAMPARI",
      "nombre": "CAMPARI + NARANJA",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Campari.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "CUBA LIBRE",
      "nombre": "RON + COCA",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/RonCoca.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "NEGRONI",
      "nombre": "NEGRONI",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Negroni.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "MALIBU",
      "nombre": "MALIBU + SPRITE + LIMON",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/MalibuSpriteLimon.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "CAIPI MALIBU",
      "nombre": "CAIPI + MALIBU",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/CaipiMalibu.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "CINZANO",
      "nombre": "CINZANO + POMELO",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/CinzanoPomelo.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "MOJITO CUBANO",
      "nombre": "RON + LIMÓN + AZUCAR + MENTA",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Mojito.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "MOJITO ARANDANOS",
      "nombre": "MOJITO DE ARANDANOS",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/MojitoArandano.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "MOJITO FRUTOS ROJOS",
      "nombre": "MOJITO DE FRUTOS ROJOS",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/MojitoFrutosRojos.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "MOJITO CITRIC",
      "nombre": "MOJITO CITRIC",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/MojitoCitric.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "QUE ME LLEVE EL VIENTO",
      "nombre": "GINEBRA NEGRA + VODKA + LIMON + SPRITE",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/GinebraVodkaLimon.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "ME LLEVA EL CHANFLE",
      "nombre": "GINEBRA NEGRA + LIMON + PASO DE LOS TOROS",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/GinebraVodkaLimon.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "PRODAN",
      "nombre": "GINEBRA NEGRA + GIN + LIMON + COCA",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/GinebraCoca.png"
    },
    {
      "categoria": "TRAGOS",
      "genero": "SUNSET",
      "nombre": "NARANJA FROZEN + MALIBU + CAMPARI",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/MalibuCampari.png"
    },
    {
      "categoria": "GINTONERIA",
      "genero": "GINTONERIA",
      "nombre": "GIN FRUTOS ROJOS",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/GinTonicFrutosRojos.png"
    },
    {
      "categoria": "GINTONERIA",
      "genero": "GINTONERIA",
      "nombre": "GIN PEPINO / ROMERO / LIMON",
      "descripcion": "(elige en los comentarios)",
      "precio": 900,
      "imagen": "./assets/GinTonicPepino.png"
    },
    {
      "categoria": "GINTONERIA",
      "genero": "GINTONERIA",
      "nombre": "GIN HIJOS DEL VIENTO",
      "descripcion": "Citric + Botánico + Romero",
      "precio": 900,
      "imagen": "./assets/GinTonicRomero.png"
    },
    {
      "categoria": "GINTONERIA",
      "genero": "GINTONERIA",
      "nombre": "GIN CITRIC",
      "descripcion": "Naranja + Pomelo + Limón",
      "precio": 900,
      "imagen": "./assets/GinTonicPomelo.png"
    },
    {
      "categoria": "GINTONERIA",
      "genero": "GINTONERIA",
      "nombre": "GIN ARANDANOS",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/GinTonicArandanos.png"
    },
    {
      "categoria": "GINTONERIA",
      "genero": "GINTONERIA",
      "nombre": "GIN FRUTILLA",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/GinTonicFrutilla.png"
    },
    {
      "categoria": "GINTONERIA",
      "genero": "GINTONERIA",
      "nombre": "GIN BOTANICO",
      "descripcion": "Canela + Clavo de Olor + Anis estrellado + Pimienta de jamaica",
      "precio": 900,
      "imagen": "./assets/GinTonicBotanico.png"
    },
    {
      "categoria": "LO NUEVO",
      "genero": "LO NUEVO",
      "nombre": "MINT TONIC",
      "descripcion": "Branca menta + Tónica",
      "precio": 900,
      "imagen": "./assets/BrancaMentaTonica.png"
    },
    {
      "categoria": "LO NUEVO",
      "genero": "LO NUEVO",
      "nombre": "CAIPIROSKA",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/Caipiroska.png"
    },
    {
      "categoria": "LO NUEVO",
      "genero": "LO NUEVO",
      "nombre": "CAIPIROSKA FRUTOS ROJOS",
      "descripcion": "",
      "precio": 900,
      "imagen": "./assets/CaipiFrutilla.png"
    },
    {
      "categoria": "LO NUEVO",
      "genero": "LO NUEVO",
      "nombre": "CYNAR JULEPE",
      "descripcion": "Cynar + Almibar + Menta + Jugo de Pomelo",
      "precio": 900,
      "imagen": "./assets/CynarJulepe.png"
    }
  ]
}
`;

const productos = JSON.parse(productosJSON);

function construirContenidoProductos() {
  let contenidoProductos = "";

  productos.Menu.forEach((producto) => {
    contenidoProductos += `
      <div class="opcion ${producto.categoria}"
        data-categoria="${producto.categoria}"
        data-nombre="${producto.nombre}"
      >
        <div class="entrada-info">
          <div class="columna">
            <div class="entrada-label colorSlogan">${producto.genero}</div>
            <div class="entrada-label">${producto.nombre}</div>
            <div class="entrada-label formatoDescripcion">${
              producto.descripcion
            }</div>
            <div class="precioBox">Precio Individual: $${producto.precio}</div>
            <div class="cantidad">
              <label for="cantidad_${producto.nombre.replace(
                /\s/g,
                ""
              )}" class="cantidadInfo">Cantidad:</label>
              <div class="cantidad-input">
                <button class="cantidad-btn" onclick="decrementarCantidad('cantidad_${producto.nombre.replace(
                  /\s/g,
                  ""
                )}')">-</button>
                <input
                  type="number"
                  id="cantidad_${producto.nombre.replace(/\s/g, "")}"
                  name="cantidad_${producto.nombre.replace(/\s/g, "")}"
                  min="1"
                  class="estiloCantidad"
                  value="1"
                />
                <button class="cantidad-btn" onclick="incrementarCantidad('cantidad_${producto.nombre.replace(
                  /\s/g,
                  ""
                )}')">+</button>
              </div>
            </div>
            <div class="seleccion">
              <input
                type="checkbox"
                id="seleccion_${producto.nombre.replace(/\s/g, "")}"
                name="seleccion_${producto.nombre.replace(/\s/g, "")}"
                data-categoria="${producto.categoria}"
                onchange="cambiarBoton('seleccion_${producto.nombre.replace(
                  /\s/g,
                  ""
                )}', 'label_${producto.nombre.replace(
      /\s/g,
      ""
    )}', 'cantidad_${producto.nombre.replace(/\s/g, "")}', '${
      producto.nombre
    }', ${producto.precio}, '${producto.categoria}')"
              />
              <label
                for="seleccion_${producto.nombre.replace(/\s/g, "")}"
                id="label_${producto.nombre.replace(/\s/g, "")}"
                class="label-boton"
              >Añadir al pedido</label
              >
            </div>
          </div>
          <div class="columna">
            <div class="imagen">
              <img
                src="${producto.imagen}"
                alt="Imagen de ${producto.nombre}"
              />
            </div>
          </div>
        </div>
      </div>
    `;
  });

  return contenidoProductos;
}

function filterTable1() {
  var category = document.getElementById("category-select1").value;
  var productosContainer = document.getElementById("productos-container1");
  var productosDivs = productosContainer.querySelectorAll(".opcion");

  productosDivs.forEach(function (productoDiv, index) {
    var categoriaProducto = productoDiv.getAttribute("data-categoria");

    if (category === "todas" || category === categoriaProducto) {
      // Establecer el estilo para mostrar los elementos en línea
      productoDiv.style.display = "inline-block";

      // Agregar un salto de línea cada dos elementos
      if (index % 2 === 1) {
        productoDiv.style.clear = "both";
      } else {
        productoDiv.style.clear = "none";
      }
    } else {
      productoDiv.style.display = "none";
    }
  });
}

const productosContainer = document.getElementById("productos-container1");

productosContainer.innerHTML = construirContenidoProductos();

function cambiarBoton(checkboxId, labelId, cantidadId, nombre, precio) {
  var listaOrden = document.getElementById("orden_lista");
  var checkbox = document.getElementById(checkboxId);
  var label = document.getElementById(labelId);
  var cantidadElemento = document.getElementById(cantidadId);
  var cantidad = parseInt(cantidadElemento.value);
  var agregar = false; // Variable para determinar si se agrega o elimina el producto

  var tuOrdenElemento = document.getElementById("tu_orden");
  var botonComentarios = document.getElementById("btnComentarios");
  botonComentarios.classList.add("mostrar");

  var itemsEnOrden = listaOrden.getElementsByClassName("categoria-comun");

  if (checkbox.checked && label.textContent === "Añadir al pedido") {
    if (cantidadElemento.value.trim() === "") {
      Toastify({
        text: "Selecciona una cantidad válida para poder añadir al pedido.",
        duration: 4000,
        gravity: "top",
        position: "right",
        className: "toastify",
        style: { background: "linear-gradient(to right, #FF4D4D, #FF9999)" },
      }).showToast();
      return; // Detener la ejecución si el campo de cantidad está vacío
    }
    if (cantidad === 0) {
      Toastify({
        text: "Selecciona una cantidad mayor a cero para poder añadir al pedido.",
        duration: 4000,
        gravity: "top",
        position: "right",
        className: "toastify",
        style: { background: "linear-gradient(to right, #FF4D4D, #FF9999)" },
      }).showToast();
      return; // Detener la ejecución si no se selecciona una cantidad válida
    }
    // Verificar la selección antes de agregar el producto

    label.textContent = "Borrar pedido";
    label.classList.add("boton-borrar");
    agregar = true;

    tuOrdenElemento.textContent = "Tu orden 📝";

    // Habilitar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.disabled = false;
  } else if (!checkbox.checked) {
    label.textContent = "Añadir al pedido";
    label.classList.remove("boton-borrar");

    if (itemsEnOrden.length === 0) {
      tuOrdenElemento.textContent = "";
    }
  }

  agregarProducto(nombre, precio, agregar, checkboxId, listaOrden);

  // Calcular y actualizar el precio final
  var precioFinal = 0;
  var items = listaOrden.getElementsByClassName("categoria-comun");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var precioIndividual = parseFloat(
      item.querySelector(".precio").textContent.replace("Precio: $", "")
    );
    var cantidadProducto = parseInt(
      item.querySelector(".cantidad").textContent.replace("Cantidad: ", "")
    );
    var precioTotal = precioIndividual * cantidadProducto;
    precioFinal += precioTotal;
  }

  var precioFinalElemento = document.getElementById("precio_final");
  if (precioFinal > 0) {
    precioFinalElemento.textContent =
      "(Valor total de la orden: $" + precioFinal.toFixed(2) + ")";

    // Mostrar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.style.display = "block";
  } else {
    precioFinalElemento.textContent = "";

    // Ocultar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.style.display = "none";
  }

  // Calcular y actualizar el precio final
  var precioFinal = 0;
  var items = listaOrden.getElementsByClassName("categoria-comun");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var precioIndividual = parseFloat(
      item.querySelector(".precio").textContent.replace("Precio: $", "")
    );
    var cantidadProducto = parseInt(
      item.querySelector(".cantidad").textContent.replace("Cantidad: ", "")
    );
    var precioTotal = precioIndividual * cantidadProducto;
    precioFinal += precioTotal;
  }

  var precioFinalElemento = document.getElementById("precio_final");
  if (precioFinal > 0) {
    precioFinalElemento.textContent =
      "(Valor total de la orden: $" + precioFinal.toFixed(2) + ")";

    // Mostrar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.style.display = "block";
    var datosUsuarioElemento = document.getElementById("datos_usuario1");
    datosUsuarioElemento.style.display = "block";
  } else {
    precioFinalElemento.textContent = "";

    // Ocultar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.style.display = "none";
  }
  precioFinalElemento.textContent =
    "Valor total de la orden: $" + precioFinal.toFixed(2);
  document.getElementById("precio_final").value = precioFinal; // Establecer el valor en un campo oculto
}

function resetearDatos(cantidadId, checkboxId, labelId) {
  var cantidadElemento = document.getElementById(cantidadId);
  var checkbox = document.getElementById(checkboxId);
  var label = document.getElementById(labelId);

  cantidadElemento.value = ""; // Restablecer el valor de cantidad a vacío
  checkbox.checked = false; // Desmarcar el checkbox
  label.textContent = "Añadir al pedido"; // Restablecer el texto del label
  label.classList.remove("boton-borrar");
}

function agregarProducto(nombre, precio, seleccionado, checkboxId, listaOrden) {
  var checkbox = document.getElementById(checkboxId);
  var cantidadElemento = checkbox.parentNode.parentNode
    .getElementsByClassName("cantidad")[0]
    .getElementsByTagName("input")[0];
  var cantidad = parseInt(cantidadElemento.value);

  var precioIndividual = precio;
  var precioTotal = precio * cantidad;

  if (seleccionado) {
    var listItem = document.createElement("span");
    listItem.classList.add("categoria-comun");

    var productoDescripcion = document.createElement("div");
    productoDescripcion.classList.add("producto-descripcion");

    var nombreElemento = document.createElement("span");
    nombreElemento.classList.add("nombre");
    nombreElemento.innerHTML = nombre + ": ";

    var cantidadElementoSpan = document.createElement("span");
    cantidadElementoSpan.classList.add("cantidad", "cantidadDescripcion");
    cantidadElementoSpan.innerHTML = "Cantidad: " + cantidad + "✔ ";

    var precioIndividualElemento = document.createElement("span");
    precioIndividualElemento.classList.add("precio", "precioDescripcion");
    precioIndividualElemento.innerHTML = "Precio: $" + precioIndividual + "✔ ";

    var precioTotalElemento = document.createElement("span");
    precioTotalElemento.classList.add(
      "precio",
      "precio-total",
      "precioTotalDescripcion"
    );
    precioTotalElemento.innerHTML = "Precio total: $" + precioTotal + "✔ ";

    productoDescripcion.appendChild(nombreElemento);
    productoDescripcion.appendChild(cantidadElementoSpan);
    productoDescripcion.appendChild(precioIndividualElemento);
    productoDescripcion.appendChild(precioTotalElemento);

    listItem.appendChild(productoDescripcion);
    listaOrden.appendChild(listItem);

    Toastify({
      text: "Producto agregado con éxito.",
      duration: 3000,
      gravity: "top",
      position: "right",
      className: "toastify",
      style: { background: "linear-gradient(to right, #037DC6, #79C1ED)" },
    }).showToast();
  } else {
    // Eliminar el producto de la lista si ya no está seleccionado
    var items = listaOrden.getElementsByClassName("categoria-comun");
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (
        item.getElementsByClassName("nombre")[0].textContent ===
          nombre + ": " &&
        item.getElementsByClassName("precio", "precioDescripcion")[0]
          .innerHTML ===
          "Precio: $" + precioIndividual + "✔ " &&
        item.getElementsByClassName("cantidad")[0].innerHTML ===
          "Cantidad: " + cantidad + "✔ " &&
        item.getElementsByClassName("precio-total")[0].innerHTML ===
          "Precio total: $" + precioTotal + "✔ "
      ) {
        item.parentNode.removeChild(item);

        // Resetear el valor del campo de cantidad a cero
        cantidadElemento.value = "0";

        Toastify({
          text: "Producto eliminado con éxito.",
          duration: 3000,
          gravity: "top",
          position: "right",
          className: "toastify",
          style: { background: "linear-gradient(to right, #FF4D4D, #FF9999)" },
        }).showToast();
        break;
      }
    }
  }
}

// Función para incrementar la cantidad
function incrementarCantidad(inputId) {
  const input = document.getElementById(inputId);
  input.value = parseInt(input.value) + 1;
}

// Función para decrementar la cantidad
function decrementarCantidad(inputId) {
  const input = document.getElementById(inputId);
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

// Establecer estilos para los botones de incremento y decremento
document.addEventListener("DOMContentLoaded", function () {
  const cantidadInputs = document.querySelectorAll(".cantidad-input");

  cantidadInputs.forEach((cantidadInput) => {
    const decrementButton = cantidadInput.querySelector("button:first-child");
    const incrementButton = cantidadInput.querySelector("button:last-child");

    decrementButton.classList.add("cantidad-btn", "cantidad-decrementar");
    incrementButton.classList.add("cantidad-btn", "cantidad-incrementar");
  });
});

function mostrarDesplegable() {
  var desplegable = document.getElementById("desplegable_comentarios");
  desplegable.style.display = "block";
}

function cerrarDesplegable() {
  var desplegable = document.getElementById("desplegable_comentarios");
  desplegable.style.display = "none";
}

function guardarComentarios() {
  var comentarios = document.getElementById("campo_comentarios").value;

  // Cerrar el desplegable
  cerrarDesplegable();

  // Lógica adicional para manejar los comentarios guardados
  Toastify({
    text: "¡Comentarios agregados!",
    duration: 3000,
    gravity: "top",
    position: "right",
    className: "toastify",
    style: { background: "linear-gradient(to right, #037DC6, #79C1ED)" },
  }).showToast();
}

function obtenerDetallesPedido() {
  var detallesPedido = [];
  var items = listaOrden.getElementsByClassName("categoria-comun");

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var nombreElemento = item.getElementsByClassName("nombre")[0];
    var cantidadElemento = item.getElementsByClassName("cantidad")[0];

    var nombre = nombreElemento.textContent.replace(": ", "");
    var cantidad = parseInt(
      cantidadElemento.textContent.replace("Cantidad: ", "")
    );

    var detallePedido = {
      nombre,
      cantidad,
    };

    detallesPedido.push(detallePedido);
  }
  return detallesPedido;
}

function mostrarOcultarDireccion() {
  var modoEntrega = document.getElementById("modoEntrega").value;
  var direccionInput = document.getElementById("direccion");

  // Si se selecciona "ENVIAMOS", muestra el campo de dirección; de lo contrario, ocúltalo
  if (modoEntrega === "ENVÍO") {
    direccionInput.style.display = "block";
    direccionInput.required = true;
  } else {
    direccionInput.style.display = "none";
    direccionInput.required = false;
  }
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
    title: "¿Estás seguro que deseas enviar el pedido?",
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
      var comentarios = document.getElementById("campo_comentarios").value;
      var precioFinal = document.getElementById("precio_final").value; // Obtener el valor completo con el signo "$"

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
        comentarios,
        precioFinal,
        fecha: fechaFormateada, // Guardar la fecha formateada
        hora: horaFormateada, // Guardar la hora formateada
      };

      // Obtén una referencia a la base de datos de Firebase
      const database = firebase.database();

      // Agrega el pedido a la base de datos
      database.ref().push(pedido, (error) => {
        if (error) {
          console.error("Error al guardar el pedido:", error);
          Swal.fire({
            title: "Oops...!",
            text: "Hubo un error al enviar el pedido",
            icon: "error",
            dangerMode: true,
          });
        } else {
          Swal.fire({
            title: "Pedido enviado con éxito",
            text: "¡¡Gracias por visitarnos!! El tiempo estimado de demora es de 10 min. Le agradecemos su visita y le recordamos que el personal está a su disposición 😃.",
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
