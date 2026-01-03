const usuarios = [
    {
        id: 1,
        nombre: "Ana",
        compras: [
            { producto: "Camisa", precio: 200, cantidad: 2 },
            { producto: "Pantalón", precio: 500, cantidad: 1 }
        ]
    },
    {
        id: 2,
        nombre: "Luis",
        compras: [
            { producto: "Gorra", precio: 150, cantidad: 3 },
            { producto: "Sudadera", precio: 400, cantidad: 1 }
        ]
    },
    {
        id: 3,
        nombre: "Carla",
        compras: []
    }
];

const totalCompras = compras => compras.reduce((acc, c) => acc + (c.precio * c.cantidad), 0);

const totales = usuarios.map( u => ({ nombre: u.nombre, totalGastado: totalCompras(u.compras)}));
console.log(totales);

const usuarioTop = usuarios.reduce((acc, u) => {
    const total = totalCompras(u.compras);
    return total > acc.total ? { nombre: u.nombre, total } : acc;
},{ nombre: "", total: 0})
console.log(usuarioTop);

const todosProductos = usuarios.flatMap(u => u.compras);
console.log(todosProductos);

const productosUnicos = [...new Set(todosProductos.map( p => p.producto))];
console.log(productosUnicos);

const gastoTotal = usuarios.reduce((acc, u) => acc + totalCompras(u.compras), 0);
console.log(gastoTotal);