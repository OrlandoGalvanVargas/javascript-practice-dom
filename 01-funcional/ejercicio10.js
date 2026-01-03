const usuarios = [
    { nombre: "aNa", edad: 18 },
    { nombre: "lUiS", edad: 25 },
    { nombre: "CARLA", edad: 16 }
];

const incrementar = n => n + 1;
console.log(incrementar(1));

const mayorDeEdad = usuario => usuario.edad >= 18;
console.log(mayorDeEdad({ nombre: "Ana", edad: 17 }));

const formatearNombre = usuario =>
    usuario.nombre
        ? usuario.nombre[0].toUpperCase() + usuario.nombre.slice(1).toLowerCase()
        : "";
console.log(formatearNombre({ nombre: "aNa", edad: 23 }));

const promedioArr = arr =>
    arr.length ? arr.reduce((acc, n) => acc + n, 0) / arr.length : 0;
console.log(promedioArr([1, 2, 3, 4, 5]));

const nombresFormateados = usuarios.map(formatearNombre);
console.log(nombresFormateados);

const resultado = usuarios.filter(mayorDeEdad);
console.log(resultado);

const resultado2 = promedioArr(usuarios.map(u => u.edad));
console.log(resultado2);
