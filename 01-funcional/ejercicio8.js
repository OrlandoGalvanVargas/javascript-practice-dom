const usuario = { nombre: "Ana", edad: 30 };

const numeros = [1, 2, 3];

const lista = [10, 20, 30];

const resultado = {...usuario, edad: 40};
console.log(resultado);

const {nombre, edad} = usuario;
console.log(nombre + " - " + edad);

const resultado2 = [...numeros, 4];
console.log(resultado2);

const [a, b] = numeros;
console.log(a + " - " + b);

const resultado3 = [...lista, 40,50];
console.log(resultado3);