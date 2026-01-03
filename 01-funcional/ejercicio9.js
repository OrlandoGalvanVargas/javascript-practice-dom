const usuarios = [
    { nombre: "Ana", edad: 18 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Carla", edad: 30 }
];

const numeros = [10, 20, 30, 40];

const lista = [1, 2, 3, 4, 5];

const base = [1, 2, 3];

const data = [10, 20, 30, 40];

const resultado = usuarios.map( u => u.nombre === "Carla" ? {...u, edad:35 } : u );
console.log(resultado);

const resultado2 = numeros.filter(n => n !== 20);
console.log(resultado2);

const resultado3 = lista.map( n => n === 3 ? 99 : n );
console.log(resultado3);

const resultado4 =  [0, ...base];
console.log(resultado4);

const resultado5 = [...data.slice(0, 2), 999, ...data.slice(2)];
console.log(resultado5);