const usuarios = [
    { nombre: "Ana", edad: 18 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Carla", edad: 30 },
    { nombre: "Jorge", edad: 15 }
];

const numeros = [5, 10, 15, 20, 25];

const lista = [7, 9, 13, 5, 11];

 const resultado = usuarios.some(u => u.edad > 30);
 console.log(resultado);

 const resultado2 = numeros.every(n => n > 0);
 console.log(resultado2);

 const resultado3 = lista.some(n => n%2 === 0);
 console.log(resultado3);