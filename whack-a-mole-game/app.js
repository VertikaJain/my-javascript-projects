const grid = document.querySelector(".grid");
const mole = document.querySelectorAll(".mole");
const score = document.getElementById("score");
const timeLeft = document.getElementById("time-left");

let result = 0;
let currentTime = timeLeft.textContent; //60

window.addEventListener("DOMContentLoaded", () => {
    createGrid();
    randomSquare();
});

// ------ METHODS ------

// method to create grid squares
createGrid = () => {
    for (let id = 1; id <= 9; id++) {
        let element = document.createElement("div");
        element.classList.add("square");
        const attribute = document.createAttribute("id");
        attribute.value = id;
        element.setAttributeNode(attribute);
        grid.appendChild(element);
    }
}

// method to show mole image at random squares & modify score.
randomSquare = () => {
    const squares = document.querySelectorAll(".square");
    for (let square of squares) {
        square.classList.remove("mole"); // removing mole image if previously assigned
    }
    let square = squares[Math.floor(Math.random() * 9)]; // adding mole image at random position on the grid
    square.classList.add("mole");
    square.addEventListener("click", () => {
        result++;
        score.textContent = result;

    })
}