let count = 0;
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");

const render = () => {
    const div = document.getElementById("contador");
    div.textContent = count;
}

sumar.addEventListener("click", () => {
    count++;
    render();
})

restar.addEventListener("click", () => {
    count--;
    render();
})

render();