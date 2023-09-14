const productosJSON = `
{
  "Menu": [
    {
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS CLASICAS",
      "descripcion": "",
      "precio": 1900,
      "imagen": "./assets/PapasFritas.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS CON CHEDDAR",
      "descripcion": "",
      "precio": 1900,
      "imagen": "./assets/PapasFritas.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS HIJOS DEL VIENTO",
      "descripcion": "",
      "precio": 1900,
      "imagen": "./assets/PapasFritas.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS MEXICANAS",
      "descripcion": "",
      "precio": 1900,
      "imagen": "./assets/PapasFritas.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS CON KETCHUP",
      "descripcion": "",
      "precio": 1900,
      "imagen": "./assets/PapasFritas.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "PAPAS",
      "nombre": "PAPAS CON BARBACOA Y CRUDO",
      "descripcion": "",
      "precio": 1900,
      "imagen": "./assets/PapasFritas.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "NUGGETS",
      "nombre": "NUGGETS DE POLLO",
      "descripcion": "",
      "precio": 1900,
      "imagen": "./assets/PapasFritas.jpg"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "HAMBURGUESA COMPLETA",
      "descripcion": "Lechuga + Tomate + Jamón + Queso + Huevo",
      "precio": 2800,
      "imagen": "./assets/Hamburguesa.jpg"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "HAMBURGUESA CHEDDAR",
      "descripcion": "",
      "precio": 2800,
      "imagen": "./assets/Hamburguesa.jpg"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "HAMBURGUESA MEXICANA",
      "descripcion": "",
      "precio": 2800,
      "imagen": "./assets/Hamburguesa.jpg"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "HAMBURGUESA ROQUEFORT Y MORRONES",
      "descripcion": "",
      "precio": 2800,
      "imagen": "./assets/Hamburguesa.jpg"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "HAMBURGUESA RUCULA",
      "descripcion": "",
      "precio": 2800,
      "imagen": "./assets/Hamburguesa.jpg"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "HAMBURGUESA CUATRO QUESOS",
      "descripcion": "",
      "precio": 2800,
      "imagen": "./assets/Hamburguesa.jpg"
    },
    {
      "categoria": "HAMBURGUESAS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "HAMBURGUESA VEGETARIANA",
      "descripcion": "",
      "precio": 2800,
      "imagen": "./assets/Hamburguesa.jpg"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "LOMO COMPLETO",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Lomo.jpg"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "LOMO CHEDDAR",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Lomo.jpg"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "LOMO MEXICANO",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Lomo.jpg"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "LOMO ROQUEFORT Y MORRONES",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Lomo.jpg"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "LOMO RUCULA",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Lomo.jpg"
    },
    {
      "categoria": "LOMOS",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "LOMO CUATRO QUESOS",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Lomo.jpg"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "BAGUETTE DE ENTRAÑA",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Baguette.jpg"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "BAGUETTE DE JAMON/QUESO",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Baguette.jpg"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "BAGUETTE DE SUPREMA",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Baguette.jpg"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "BAGUETTE DE MILANESA DE PECETO",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Baguette.jpg"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "BAGUETTE DE PALTA + TOMATE + JAMON + QUESO",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Baguette.jpg"
    },
    {
      "categoria": "BAGUETTE",
      "genero": "SANDWHICHES (con FRITAS)",
      "nombre": "BAGUETTE DE RUCULA + TOMAT + JAMON + QUESO",
      "descripcion": "",
      "precio": 2700,
      "imagen": "./assets/Baguette.jpg"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "MILANESA AL LIMON",
      "descripcion": "",
      "precio": 4500,
      "imagen": "./assets/Milanesa.jpg"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "MILANESA A LA NAPOLITANA",
      "descripcion": "",
      "precio": 4500,
      "imagen": "./assets/Milanesa.jpg"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "MILANESA 3 QUESOS",
      "descripcion": "",
      "precio": 4500,
      "imagen": "./assets/Milanesa.jpg"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "MILANESA AL ROQUEFORT",
      "descripcion": ",
      "precio": 4500,
      "imagen": "./assets/Milanesa.jpg"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "SUPREMA AL LIMON",
      "descripcion": "",
      "precio": 4500,
      "imagen": "./assets/Milanesa.jpg"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "SUPREMA A LA NAPOLITANA",
      "descripcion": "",
      "precio": 4500,
      "imagen": "./assets/Milanesa.jpg"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "SUPREMA AL ROQUEFORT",
      "descripcion": "",
      "precio": 4500,
      "imagen": "./assets/Milanesa.jpg"
    },
    {
      "categoria": "MILANESAS/SUPREMAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "SUPREMA 3 QUESOS",
      "descripcion": "",
      "precio": 4500,
      "imagen": "./assets/Milanesa.jpg"
    },
    {
      "categoria": "TABLA DE MILANESAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "TABLA MILANESAS LA ORIGINAL",
      "descripcion": "6 variedades de milanesas de peceto + Rúcula + Crudo + Parmesano.",
      "precio": 4400,
      "imagen": "./assets/TablaMilanesas.jpg"
    },
    {
      "categoria": "TABLA DE MILANESAS",
      "genero": "MINUTAS (con FRITAS o ENSALADA)",
      "nombre": "TABLA DE MILANESAS MIXTA",
      "descripcion": "3 milanesas de peceto + 3 milanesas de pollo + Rúcula + Crudo + Parmesano.",
      "precio": 4400,
      "imagen": "./assets/TablaMilanesas.jpg"
    },
    {
      "categoria": "COMIDA MEXICANA",
      "genero": "MEXICAN FOOD (con FRITAS)",
      "nombre": "FAJITAS",
      "descripcion": "2 tacos carne de lomo + Pimientos asados + Cebolla.",
      "precio": 4300,
      "imagen": "./assets/Tacos.jpg"
    },
    {
      "categoria": "COMIDA MEXICANA",
      "genero": "MEXICAN FOOD (con FRITAS)",
      "nombre": "QUESADILLAS",
      "descripcion": "2 tacos + Jamón + Muzza.",
      "precio": 4300,
      "imagen": "./assets/Tacos.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "MUZZARELLA",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "ESPECIAL",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "NAPOLITANA",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "NAPO + ALBAHACA",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "ROQUEFORT",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "ROQUEFORT + MORRONES",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "VERDURAS AL WOK",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "FAJIPIZZA",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "RUCULA",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "PIZZAS",
      "genero": "PIZZA",
      "nombre": "3 QUESOS",
      "descripcion": "",
      "precio": 4300,
      "imagen": "./assets/Pizza.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "POSTRES",
      "nombre": "BOMBON ESCOSES",
      "descripcion": "",
      "precio": 2500,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "POSTRES",
      "nombre": "CASATTA",
      "descripcion": "",
      "precio": 2200,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "POSTRES",
      "nombre": "VIGILANTE",
      "descripcion": "",
      "precio": 2900,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "POSTRES",
      "nombre": "FLAN CASERO",
      "descripcion": "",
      "precio": 2900,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "SUGERENCIA DEL DIA",
      "genero": "SUGERENCIA DEL DIA",
      "nombre": "SUGERENCIA",
      "descripcion": "",
      "precio": 1800,
      "imagen": "./assets/CafeConLeche.jpg"
    }
  ]
}
`;