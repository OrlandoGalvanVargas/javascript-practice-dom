function ListaTareas() {

    let tareas = [];

    const agregarTarea = () => {
        const input = document.getElementById("inputTarea");
        const texto = input.value.trim();
        if (texto === "") return;

        tareas.push(texto);
        input.value = "";
        render();
    };

    const eliminarTarea = (index) => {
        tareas = tareas.filter((_, i) => i !== index);
        render(); 
    };

    function render() {
        const app = document.getElementById("app");
        app.innerHTML = `
            <h1>Lista de tareas</h1>
            <input id="inputTarea" placeholder="Escribe una tarea...." />
            <button id="btnAgregar">Agregar</button>

            <ul>
            ${tareas
                .map(
                (t, i) => `
                <li>
                ${t}
                <button data-index="${i}" class="btnEliminar">Eliminar</button>
                </li>
                `
            ).join("")}
            </ul>
        `;

    document.getElementById("btnAgregar").addEventListener("click", agregarTarea);

    document.querySelectorAll(".btnEliminar").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = Number(btn.getAttribute("data-index"));
            eliminarTarea(index);
        });
    });
}

render();

}


ListaTareas();