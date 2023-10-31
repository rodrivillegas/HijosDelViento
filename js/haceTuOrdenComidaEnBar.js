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
tituloH1.textContent = "MENÚ DE SABORES";
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
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS CLASICAS",
      "descripcion": "",
      "precio": 2600,
      "imagen": "./assets/papasFritas.png"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS CON CHEDDAR",
      "descripcion": "Panceta ahumada + Verdeo",
      "precio": 3200,
      "imagen": "./assets/papasCheedar1.png"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS HIJOS DEL VIENTO",
      "descripcion": "Salsa criolla + Mayonesa casera",
      "precio": 3000,
      "imagen": "./assets/papasHijosDelViento.png"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS MEXICANAS",
      "descripcion": "Chimi casero",
      "precio": 3000,
      "imagen": "./assets/papasChimi.png"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "NUGGETS",
      "nombre": "NUGGETS DE POLLO",
      "descripcion": "12Uni + Papas fritas",
      "precio": 3500,
      "imagen": "./assets/nugget.png"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "HAMBURGUESA COMPLETA",
      "descripcion": "Lechuga + Tomate + Jamón + Queso + Huevo",
      "precio": 3200,
      "imagen": "./assets/hamburguesaCompleta.png"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "HAMBURGUESA CHEDDAR",
      "descripcion": "Cebolla morada + Queso cheddar + Barbacoa + Huevo",
      "precio": 3500,
      "imagen": "./assets/hamburguesaCheddar.png"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "HAMBURGUESA MEXICANA",
      "descripcion": "Pimientos salteados + Chimi + Lechuga + Tomate + Jamón + Queso + Huevo",
      "precio": 3500,
      "imagen": "./assets/hamburguesaMexicana.png"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "HAMBURGUESA ROQUEFORT Y MORRONES",
      "descripcion": "Queso roquefort + Pimientos + Lechuga + Tomate + Jamón + Huevo",
      "precio": 3500,
      "imagen": "./assets/hamburguesaRoquefort.png"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "HAMBURGUESA RUCULA",
      "descripcion": "Rúcula + Tomate + Jamón + Queso + Huevo",
      "precio": 3500,
      "imagen": "./assets/hamburguesaRucula.png"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "HAMBURGUESA CUATRO QUESOS",
      "descripcion": "Variedad de quesos + Lechuga + Tomate + Jamón + Huevo",
      "precio": 3500,
      "imagen": "./assets/hamburguesaCuatroQuesos.png"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "HAMBURGUESA VEGETARIANA",
      "descripcion": "Medallón vegetariano + Rúcula + Tomate + Huevo + pimientos asados",
      "precio": 3000,
      "imagen": "./assets/hamburguesaVegana.png"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "LOMO COMPLETO",
      "descripcion": "Lechuga + Tomate + Jamón + Queso + Huevo",
      "precio": 3400,
      "imagen": "./assets/Lomo.png"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "LOMO CHEDDAR",
      "descripcion": "Cebolla morada + Queso cheddar + Barbacoa + Huevo",
      "precio": 3700,
      "imagen": "./assets/Lomo2.png"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "LOMO MEXICANO",
      "descripcion": "Pimientos salteados + Chimi + Lechuga + Tomate + Jamón + Queso + Huevo",
      "precio": 3700,
      "imagen": "./assets/Lomo.png"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "LOMO ROQUEFORT Y MORRONES",
      "descripcion": "Queso roquefort + Pimientos + Lechuga + Tomate + Jamón + Huevo",
      "precio": 3700,
      "imagen": "./assets/Lomo2.png"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "LOMO RUCULA",
      "descripcion": "Rúcula + Tomate + Jamón + Queso + Huevo",
      "precio": 3700,
      "imagen": "./assets/Lomo.png"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "LOMO CUATRO QUESOS",
      "descripcion": "Variedad de Quesos + Lechuga + Tomate + Jamón + Huevo",
      "precio": 3700,
      "imagen": "./assets/Lomo2.png"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "BAGUETTE DE ENTRAÑA",
      "descripcion": "",
      "precio": 3500,
      "imagen": "./assets/baguetteEntraña.png"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "BAGUETTE DE JAMON/QUESO",
      "descripcion": "",
      "precio": 3100,
      "imagen": "./assets/baguetteJamonQueso.png"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "BAGUETTE DE SUPREMA",
      "descripcion": "",
      "precio": 3500,
      "imagen": "./assets/baguetteMilanesaPollo.png"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "BAGUETTE DE MILANESA DE PECETO",
      "descripcion": "",
      "precio": 3500,
      "imagen": "./assets/baguetteMilanesaCarne.png"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "BAGUETTE DE PALTA + TOMATE + JAMON + QUESO",
      "descripcion": "",
      "precio": 3500,
      "imagen": "./assets/baguettePalta.png"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (c/ FRITAS)",
      "nombre": "BAGUETTE DE RUCULA + TOMATE + JAMON + QUESO",
      "descripcion": "",
      "precio": 3100,
      "imagen": "./assets/baguetteRucula.png"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "MILANESA AL LIMON",
      "descripcion": "",
      "precio": 3700,
      "imagen": "./assets/milanesaCarne.png"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "MILANESA A LA NAPOLITANA",
      "descripcion": "",
      "precio": 3700,
      "imagen": "./assets/milanesaNapolitanaCarne.png"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "MILANESA 3 QUESOS",
      "descripcion": "",
      "precio": 3700,
      "imagen": "./assets/milanesaCarne3Quesos.png"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "MILANESA AL ROQUEFORT",
      "descripcion": "",
      "precio": 3700,
      "imagen": "./assets/milanesaCarneRoquefort.png"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "SUPREMA AL LIMON",
      "descripcion": "",
      "precio": 3700,
      "imagen": "./assets/milanesaPollo.png"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "SUPREMA A LA NAPOLITANA",
      "descripcion": "",
      "precio": 3700,
      "imagen": "./assets/milanesaPolloNapolitana.png"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "SUPREMA AL ROQUEFORT",
      "descripcion": "",
      "precio": 3700,
      "imagen": "./assets/supremaRoquefort.png"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "SUPREMA 3 QUESOS",
      "descripcion": "Con + Pimientos Asados",
      "precio": 3700,
      "imagen": "./assets/suprema3Quesos.png"
    },
    {
      "categoria": "TABLA DE MILANESAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "TABLA MILANESAS LA ORIGINAL",
      "descripcion": "6 variedades de milanesas de peceto + Rúcula + Crudo + Parmesano.",
      "precio": 7900,
      "imagen": "./assets/tablaMilanesas.png"
    },
    {
      "categoria": "TABLA DE MILANESAS",
      "genero": "MINUTAS (c/ FRITAS o ENSALADA)",
      "nombre": "TABLA DE MILANESAS MIXTA",
      "descripcion": "3 milanesas de peceto + 3 milanesas de pollo + Rúcula + Crudo + Parmesano.",
      "precio": 7500,
      "imagen": "./assets/tablaMilanesas2.png"
    },
    {
      "categoria": "COMIDA MEXICANA",
      "genero": "MEXICAN FOOD (c/ FRITAS)",
      "nombre": "FAJITAS",
      "descripcion": "2 tacos carne de lomo + Pimientos asados + Cebolla.",
      "precio": 3400,
      "imagen": "./assets/fajitas.png"
    },
    {
      "categoria": "COMIDA MEXICANA",
      "genero": "MEXICAN FOOD (c/ FRITAS)",
      "nombre": "QUESADILLAS",
      "descripcion": "2 tacos + Jamón + Muzza.",
      "precio": 3100,
      "imagen": "./assets/Tacos.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "PIZZA MUZZARELLA",
      "descripcion": "Salsa + Muzzarella + Aceitunas",
      "precio": 4950,
      "imagen": "./assets/muzzarella.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "PIZZA ESPECIAL",
      "descripcion": "Salsa + Muzzarella + Jamón + Morrones + Aceitunas",
      "precio": 4950,
      "imagen": "./assets/especial.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "PIZZA NAPOLITANA",
      "descripcion": "Salsa + Muzzarella + Tomates + Aceitunas",
      "precio": 4950,
      "imagen": "./assets/napolitana.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "PIZZA NAPO + ALBAHACA",
      "descripcion": "Salsa + Muzzarella + Tomates + Oliva + Albahaca fresca + Aceitunas",
      "precio": 4950,
      "imagen": "./assets/napolitanaAlbahaca.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "PIZZA ROQUEFORT",
      "descripcion": "Salsa + Muzzarella + Queso Azul + Aceitunas",
      "precio": 4950,
      "imagen": "./assets/roquefort.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "PIZZA ROQUEFORT + MORRONES",
      "descripcion": "Salsa + Muzzarella + Pimientos Salteados + Aceitunas + Queso Azul",
      "precio": 4950,
      "imagen": "./assets/roquefortMorrones.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "PIZZA VERDURAS AL WOK",
      "descripcion": "Salsa + Muzzarella + Zucchini + Berenjena + Pimientos + Cebolla salteada + Aceitunas",
      "precio": 4950,
      "imagen": "./assets/verduras.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "FAJIPIZZA",
      "descripcion": "Salsa + Muzzarella + Pimientos al wok + Carne de lomo desmenuzada",
      "precio": 5400,
      "imagen": "./assets/fajipizza.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "PIZZA RUCULA",
      "descripcion": "Salsa + Muzzarella + Rúcula + Tomates con tados + Panceta ahumada + Queso Parmesano",
      "precio": 4950,
      "imagen": "./assets/rucula.png"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "PIZZA 3 QUESOS",
      "descripcion": "Salsa + Muzzarella + Queso Azul + Sardo",
      "precio": 4950,
      "imagen": "./assets/3quesos.png"
    },
    {
      "categoria": "POSTRES",
      "genero": "POSTRES",
      "nombre": "BOMBON ESCOSES",
      "descripcion": "",
      "precio": 1600,
      "imagen": "./assets/bombonEscoces.png"
    },
    {
      "categoria": "POSTRES",
      "genero": "POSTRES",
      "nombre": "FLAN CASERO",
      "descripcion": "",
      "precio": 1200,
      "imagen": "./assets/flanCasero.png"
    },
    {
      "categoria": "POSTRES",
      "genero": "POSTRES",
      "nombre": "CAMIONERO",
      "descripcion": "Queso + Dulce",
      "precio": 1200,
      "imagen": "./assets/quesoDulce.png"
    },
    {
      "categoria": "POSTRES",
      "genero": "POSTRES",
      "nombre": "BUDIN DE PAN",
      "descripcion": "",
      "precio": 1200,
      "imagen": "./assets/budinPan.png"
    },
    {
      "categoria": "SUGERENCIA DEL DIA",
      "genero": "SUGERENCIA DEL DIA",
      "nombre": "¡CONSULTAR!",
      "descripcion": "",
      "precio": "",
      "imagen": "./assets/LogoHijosDelVientoAnimacion.png"
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

function filterTable() {
  var category = document.getElementById("category-select").value;
  var productosContainer = document.getElementById("productos-container");
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

const productosContainer = document.getElementById("productos-container");

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

  // Al final de la función cambiarBoton
  // ...
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
