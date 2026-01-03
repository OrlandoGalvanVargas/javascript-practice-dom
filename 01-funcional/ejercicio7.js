const nums = [10, 2, 50, 3, 1];

const usuarios = [
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 20 },
    { nombre: "Carla", edad: 25 }
];

const letras = ["d", "a", "c", "b"];

const resultado = [...nums].sort((a,b) => a - b);
console.log(resultado);

const resultado2 = [...usuarios].sort((a,b) => a.edad - b.edad);
console.log(resultado2);

const resultado3 = [...letras].sort((a,b) => b.localeCompare(a));
console.log(resultado3);