// src/data/productos.js
// Los datos viven en un archivo aparte: luego vendrán de una API o de Neon.
export const productos = [
  { id: 1, nombre: "Torta de chocolate", categoria: "Tortas", precio: 65, unidad: "1 kg", imagen: "https://www.pasteleriamariate.com.pe/cdn/shop/files/MARIATE_ABRIL20244135.jpg?v=1775680680" },
  { id: 2, nombre: "Torta tres leches", categoria: "Tortas", precio: 58, unidad: "1 kg", imagen: "https://www.pasteleriamariate.com.pe/cdn/shop/files/TRES_LECHES_MINI_540x.jpg?v=1775593511" },
  { id: 3, nombre: "Cheesecake de maracuyá", categoria: "Tortas", precio: 60, unidad: "8 porciones", imagen: "https://www.pasteleriamariate.com.pe/cdn/shop/products/19_540x.png?v=1678980627" },
  { id: 4, nombre: "Pan de yema", categoria: "Panes", precio: 5, unidad: "bolsa de 6", imagen: "https://www.bakels.pe/wp-content/uploads/sites/31/2019/02/emu-sweet-dough609.jpg" },
  { id: 5, nombre: "Keke de naranja", categoria: "Panes", precio: 22, unidad: "molde mediano", imagen: "https://www.pasteleriamariate.com.pe/cdn/shop/files/kekedenaranja_540x.png?v=1682617800" },
  { id: 6, nombre: "Alfajores de maicena", categoria: "Bocaditos", precio: 12, unidad: "caja de 6", imagen: "https://www.pasteleriamariate.com.pe/cdn/shop/files/x4_540x.png?v=1790860747" },
  { id: 7, nombre: "Cupcakes red velvet", categoria: "Bocaditos", precio: 18, unidad: "caja de 4", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs_iVV0qHJH9PPNpH3JE53tfPCFURwCC8lV5wcmoZljVciBNeLR6F7AiK&s=10" },
  { id: 8, nombre: "Pie de manzana", categoria: "Postres", precio: 38, unidad: "8 porciones", imagen: "https://www.pasteleriamariate.com.pe/cdn/shop/files/piedemanzana_540x.png?v=1694375482" },
];

// "Todos" + cada categoría una sola vez (Set elimina repetidos)
export const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];