const titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo texto";

const primerParrafo = document.querySelector(".mensaje");
primerParrafo.style.color = "red";

const todosLosParrafos = document.querySelectorAll(".mensaje");

todosLosParrafos.forEach(p => {
    p.style.backgroundColor = "#e2e2d2";
})

const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
    titulo.textContent = "Título actualizado por evento";
});
