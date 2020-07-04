const grid = document.querySelector(".grid");
const mole = document.querySelectorAll(".mole");
const score = document.getElementById("score");
const timeLeft = document.getElementById("time-left");
const time = document.querySelector(".time");

let result = 0;
let currentTime = timeLeft.textContent; //60

// ------ EVENT LISTENERS ------

window.addEventListener("DOMContentLoaded", () => {
    createGrid();
    let timerId = setInterval(randomSquare, 500);
    let countdown = setInterval(() => {
        timeLeft.textContent = --currentTime;
        if (currentTime <= 0) {
            time.textContent="game over!";
            grid.removeEventListener("mouseup", whackMole);
            clearInterval(countdown);
            clearInterval(timerId);
        }
    }, 1000);
});

grid.addEventListener("mouseup", whackMole = (e) => {
    if (e.target.classList.contains("mole")) {
        result++;
        score.textContent = result;
    }
})

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
}