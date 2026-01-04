function ListaTareasSubtareas() {

    let tareas = [];
    let editIndex = null;        
    let editSubIndex = null;     

    const load = () => {
        const data = localStorage.getItem("tareas-sub");
        if (data) tareas = JSON.parse(data);
    };

    const save = () => {
        localStorage.setItem("tareas-sub", JSON.stringify(tareas));
    };

    const agregarTarea = () => {
        const input = document.getElementById("inputTarea");
        const texto = input.value.trim();
        if (!texto) return;

        tareas.push({ texto, subtareas: [] });
        save();
        input.value = "";
        render();
    };

    const agregarSubtarea = (index) => {
        const input = document.getElementById(`subInput-${index}`);
        const texto = input.value.trim();
        if (!texto) return;

        tareas[index].subtareas.push(texto);
        save();
        input.value = "";
        render();
    };

    const eliminarTarea = (index) => {
        tareas = tareas.filter((_, i) => i !== index);
        save();
        render();
    };

    const eliminarSubtarea = (index, subIndex) => {
        tareas[index].subtareas = tareas[index].subtareas.filter((_, i) => i !== subIndex);
        save();
        render();
    };

    const activarEdicion = (index) => {
        editIndex = index;
        editSubIndex = null;
        render();
    };

    const activarEdicionSub = (index, subIndex) => {
        editIndex = index;
        editSubIndex = subIndex;
        render();
    };

    const guardarEdicion = (index) => {
        const input = document.getElementById("editInput");
        const texto = input.value.trim();
        if (!texto) return;

        tareas[index].texto = texto;
        editIndex = null;
        save();
        render();
    };

    const guardarEdicionSub = (index, subIndex) => {
        const input = document.getElementById("editSubInput");
        const texto = input.value.trim();
        if (!texto) return;

        tareas[index].subtareas[subIndex] = texto;
        editIndex = null;
        editSubIndex = null;
        save();
        render();
    };

    const cancelarEdicion = () => {
        editIndex = null;
        editSubIndex = null;
        render();
    };

    function render() {
        const app = document.getElementById("app");

        app.innerHTML = `
            <h1>Tareas con Subtareas</h1>

            <input id="inputTarea" placeholder="Nueva tarea..." />
            <button id="btnAgregar">Agregar tarea</button>

            <ul>
                ${tareas.map((t, i) => `
                    <li>

                        <!-- Tarea principal -->
                        ${editIndex === i && editSubIndex === null
                            ? `
                                <input id="editInput" value="${t.texto}" />
                                <button class="btnGuardar" data-i="${i}">Guardar</button>
                                <button class="btnCancelar">Cancelar</button>
                            `
                            : `
                                <strong>${t.texto}</strong>
                                <button class="btnEditar" data-i="${i}">Editar</button>
                                <button class="btnEliminar" data-i="${i}">Eliminar</button>
                            `
                        }

                        <!-- Subtareas -->
                        <ul>
                            ${t.subtareas.map((st, si) => `
                                <li>
                                    ${
                                        editIndex === i && editSubIndex === si
                                            ? `
                                                <input id="editSubInput" value="${st}" />
                                                <button class="btnGuardarSub" data-i="${i}" data-si="${si}">Guardar</button>
                                                <button class="btnCancelar">Cancelar</button>
                                            `
                                            : `
                                                ${st}
                                                <button class="btnEditarSub" data-i="${i}" data-si="${si}">Editar</button>
                                                <button class="btnEliminarSub" data-i="${i}" data-si="${si}">Eliminar</button>
                                            `
                                    }
                                </li>
                            `).join("")}
                        </ul>

                        <!-- Agregar subtarea -->
                        <input id="subInput-${i}" placeholder="Agregar subtarea..." />
                        <button class="btnAgregarSub" data-i="${i}">+</button>

                    </li>
                `).join("")}
            </ul>
        `;

        document.getElementById("btnAgregar").addEventListener("click", agregarTarea);

        document.querySelectorAll(".btnEliminar").forEach(btn => {
            eliminarTarea(Number(btn.dataset.i));
        });

    }

    load();
    render();
    
}

ListaTareasSubtareas();
