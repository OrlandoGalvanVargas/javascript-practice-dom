const productos = [
    { id: 1, nombre: "camIsa", precio: 150, stock: 3 },
    { id: 2, nombre: "PANTALON", precio: 500, stock: 0 },
    { id: 3, nombre: "GORRA", precio: 200, stock: 10 },
    { id: 4, nombre: "suDADERA", precio: 350, stock: 2 }
];

const normalizarNombre = producto => producto.nombre ? producto.nombre[0].toUpperCase() + producto.nombre.slice(1).toLowerCase() : "";
console.log(productos.map(p => normalizarNombre(p)));

const conIVA = producto => producto.precio * 1.16;
console.log(productos.map( p => conIVA(p)));

const hayStock = producto => producto.stock > 0;
console.log(productos.map( p => hayStock(p)));

const productosFinales = productos.map( p => ({...p, nombre: normalizarNombre(p), precio: conIVA(p), disponible: hayStock(p)}));
console.log(productosFinales);

const soloDisponibles = productos.filter( p => hayStock(p));
console.log(soloDisponibles);

const promedioPrecio = productos.reduce((acc, p) => acc + conIVA(p.precio), 0) / productos.length;
console.log(promedioPrecio);