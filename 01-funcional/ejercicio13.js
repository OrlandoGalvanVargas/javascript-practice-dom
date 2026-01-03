const productos = [
    { id: 1, nombre: "Camisa", categoria: "Ropa", precio: 200, stock: 5 },
    { id: 2, nombre: "Pantalón", categoria: "Ropa", precio: 500, stock: 2 },
    { id: 3, nombre: "Gorra", categoria: "Accesorios", precio: 150, stock: 10 },
    { id: 4, nombre: "Mochila", categoria: "Accesorios", precio: 350, stock: 0 },
    { id: 5, nombre: "Sudadera", categoria: "Ropa", precio: 400, stock: 3 }
];

const buscarProducto = (productos, nombreBuscado) => productos.find( p => p.nombre.toLowerCase() === nombreBuscado.toLowerCase());
console.log(buscarProducto(productos, "mochila"));

const filtrarPorCategoria = (productos, categoria) => productos.filter( p => p.categoria.toLowerCase() === categoria.toLowerCase());
console.log(filtrarPorCategoria(productos, "Ropa"));

const productosDisponibles = productos => productos.filter( p => p.stock > 0);
console.log(productosDisponibles(productos));

const precioTotal = productos => productos.reduce((acc, p) => acc + p.precio, 0);
console.log(precioTotal(productos));

const incrementarPrecios = productos => productos.map( p => ({...p, precio: (p.precio * 1.1)}));
console.log(incrementarPrecios(productos));

const soloNombreYPrecio = productos => productos.map(p => ({ nombre: p.nombre, precio: p.precio }));
console.log(soloNombreYPrecio);

const productoMasCaro = productos => productos.reduce((acc, p) => {
    return p.precio > acc.precio ? {...p} : acc;
},{precio: 0} );
console.log(productoMasCaro(productos));