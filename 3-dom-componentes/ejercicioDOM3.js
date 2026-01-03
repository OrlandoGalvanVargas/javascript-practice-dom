function Contador() {

    let count = 0;

    const incrementar = () => {
        count++;
        render();
    }

    const decrementar = () => {
        count--;
        render();
    }

    function render() {
        const app = document.getElementById("app");
        app.innerHTML = `
            <h1>Contandor Componente</h1>
            <div>${count}</div>
            <button id="btnMas">+1</button>
            <button id="btnMenos">-1</button>
        `;

        document.getElementById("btnMas").addEventListener("click", incrementar);
        document.getElementById("btnMenos").addEventListener("click", decrementar);
    }


    render();
}

Contador();