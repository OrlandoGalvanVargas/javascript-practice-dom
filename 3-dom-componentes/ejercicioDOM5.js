function ListaTareasPersistente() {

    let tareas = [];

    const load = () => {
        const data = localStorage.getItem("tareas");
        if (data) {
            tareas = JSON.parse(data);
        }
    };

    const save = () => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    const agregar = () => {
        const input = document.getElementById("inputTarea");
        const texto = input.value.trim();

        if (texto === "") return;

        tareas.push(texto);
        save();
        input.value = "";
        render();
    };

    const eliminar = (index) => {
        tareas = tareas.filter((_, i) => i !== index);
        save();
        render();
    };

    function render() {
        const app = document.getElementById("app");
        app.innerHTML = `
        <h1>Lista de tareas Persistente</h1>

        <input id="inputTarea" placeholder="Escribe una tarea..." />
        <button id="btnAgregar">Agregar</button>

        <ul>
        ${tareas
            .map(
                ((t, i) => `
                <li>
                ${t}
                <button class="btnEliminar" data-index="${i}">Eliminar</button>
                </li>
                `)
            )
            .join("")}
            </ul>
        `;

        document.getElementById("btnAgregar").addEventListener("click", agregar);

        document.querySelectorAll(".btnEliminar").forEach( btn => {
            btn.addEventListener("click", () => {
                const index = Number(btn.getAttribute("data-index"));
                eliminar(index);
            });
        });
    }

    load();
    render();
}

ListaTareasPersistente();