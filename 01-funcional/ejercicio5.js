const usuarios = [
    { nombre: "Ana", edad: 18 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Carla", edad: 30 },
    { nombre: "Jorge", edad: 15 }
];

const numeros = [10,20,30,40,100,5];

const lista = [7,9,13,8,22,4];

const resultado = usuarios.find( u => u.nombre === "Carla" );
console.log(resultado);

const resultado2 = numeros.find( n => n > 50 );
console.log(resultado2);

const resultado3 = lista.find(n => n%2 === 0);
console.log(resultado3);