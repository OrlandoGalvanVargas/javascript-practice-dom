function ListaTareasEditable() {

    let tareas = [];
    let editIndex = null; 

    const load = () => {
        const data = localStorage.getItem("tareas-edit");
        if (data) tareas = JSON.parse(data);
    };

    const save = () => {
        localStorage.setItem("tareas-edit", JSON.stringify(tareas));
    };

    const agregar = () => {
        const input = document.getElementById("inputTarea");
        const texto = input.value.trim();
        if (!texto) return;

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

    const activarEdicion = (index) => {
        editIndex = index;
        render();
    };

    const guardarEdicion = (index) => {
        const input = document.getElementById("editInput");
        const nuevoTexto = input.value.trim();
        if (!nuevoTexto) return;

        tareas[index] = nuevoTexto;
        editIndex = null;
        save();
        render();
    };

    const cancelarEdicion = () => {
        editIndex = null;
        render();
    };

    function render() {
        const app = document.getElementById("app");
        app.innerHTML = `
            <h1>Lista de tareas (Edición Inline)</h1>

            <input id="inputTarea" placeholder="Escribe una tarea..." />
            <button id="btnAgregar">Agregar</button>

            <ul>
                ${tareas.map((t, i) => {
                    if (i === editIndex) {
                        return `
                            <li>
                                <input id="editInput" value="${t}" />
                                <button data-i="${i}" class="btnGuardar">Guardar</button>
                                <button class="btnCancelar">Cancelar</button>
                            </li>
                        `;
                    }

                    return `
                        <li>
                            ${t}
                            <button data-i="${i}" class="btnEditar">Editar</button>
                            <button data-i="${i}" class="btnEliminar">Eliminar</button>
                        </li>
                    `;
                }).join("")}
            </ul>
        `;

        document.getElementById("btnAgregar").addEventListener("click", agregar);

        document.querySelectorAll(".btnEliminar").forEach(btn => {
            btn.addEventListener("click", () => {
                eliminar(Number(btn.getAttribute("data-i")));
            });
        });

        document.querySelectorAll(".btnEditar").forEach(btn => {
            btn.addEventListener("click", () => {
                activarEdicion(Number(btn.getAttribute("data-i")));
            });
        });

        const btnGuardar = document.querySelector(".btnGuardar");
        if (btnGuardar) {
            btnGuardar.addEventListener("click", () => {
                guardarEdicion(Number(btnGuardar.getAttribute("data-i")));
            });
        }

        const btnCancelar = document.querySelector(".btnCancelar");
        if (btnCancelar) {
            btnCancelar.addEventListener("click", cancelarEdicion);
        }
    }

    load();
    render();
}

ListaTareasEditable();
