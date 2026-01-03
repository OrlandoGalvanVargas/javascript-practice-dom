const usuarios = [
    { nombre: "Ana", edad: 18 },
    { nombre: "luis", edad: 25 },
    { nombre: "Carla", edad: 30 },
    { nombre: "Jorge", edad: 15 }
]

const esMayorA21 = n => n.edad > 21;

const resultado1 = usuarios.filter(esMayorA21);

console.log(resultado1)

const resultado2 = usuarios.map(u => u.nombre);

console.log(resultado2);