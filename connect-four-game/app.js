const grid = document.querySelector(".grid");
const boxes = document.querySelectorAll(".grid div");
const currentPlayer = document.getElementById("current-player");
const result = document.getElementById("result");

window.addEventListener("DOMContentLoaded", () => {
    // adding grid elements dynamically => 6x7=42
    for (let i = 0; i < 42; i++) {
        let element = document.createElement("div");
        grid.appendChild(element);
    }
    for (let i = 0; i < 7; i++) {
        let element = document.createElement("div");
        element.classList.add("taken");
        grid.appendChild(element);

    }


})
