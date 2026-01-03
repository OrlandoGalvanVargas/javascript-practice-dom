const numeros = [5,10,15,20];

const usuarios = [
    { nombre: "Ana", edad: 18 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Carla", edad: 30 },
    { nombre: "Jorge", edad: 15 }
];


const resultado = numeros.reduce((acc, n) => acc + n, 0);

console.log(resultado);

const resultado2 = usuarios.reduce((acc, e) => acc + e.edad, 0)

console.log(resultado2/usuarios.length);

const resultado3 = usuarios.reduce((acc, u) => {
    if (u.edad > 21) {
        acc.mayores++;
    } else {
        acc.menores++;
    }
    return acc;
}, {mayores: 0, menores: 0});

console.log(resultado3);