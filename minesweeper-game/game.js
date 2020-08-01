import { checkBox } from "./recurse.js";

const gridContainer = document.querySelector(".grid");
const GRID_WIDTH = 100;
let bombCount = 20;

document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    addNumbersToBoard();
})

// method to create game board
let createBoard = () => {
    let bombsArray = new Array(bombCount).fill("bomb");
    let emptyArray = new Array(GRID_WIDTH - bombCount).fill("valid");
    let gameArray = bombsArray.concat(emptyArray);
    let shuffledArray = gameArray.sort(() => Math.random() - 0.5);
    for (let i = 0; i < GRID_WIDTH; i++) {
        const box = document.createElement("div");
        box.setAttribute("data-id", i);
        box.classList.add(shuffledArray[i]); // add bomb/valid classes to the boxes on the grid
        gridContainer.appendChild(box);
    }
}

// method to add number of neighbouring bombs to the each valid (non-bomb) box.
let addNumbersToBoard = () => {
    const boxElements = document.querySelectorAll(".bomb,.valid");
    const width = 10; // width of one column
    for (let box of boxElements) {
        let totalBombs = 0;
        let id = parseInt(box.dataset.id);
        const isLeftEdge = (id % width === 0); // returns true if element is present at left edge
        const isRightEdge = (id % width === width - 1);  // returns true if element is present at right edge

        if (box.classList.contains("valid")) {
            // Condition 1 : check the left of current box
            if (id > 0 && !isLeftEdge && boxElements[id - 1].classList.contains("bomb")) totalBombs++;
            // Condition 2 : check right of current box
            if (!isRightEdge && boxElements[id + 1].classList.contains("bomb")) totalBombs++;
            // Condition 3 : check north of current box
            if (id > 9 && boxElements[id - width].classList.contains("bomb")) totalBombs++;
            // Condition 4 : check south of current box
            if (id < 90 && boxElements[id + width].classList.contains("bomb")) totalBombs++;
            // Condition 5 : check north-east of current box
            if (id > 9 && !isRightEdge && boxElements[id + 1 - width].classList.contains("bomb")) totalBombs++;
            // Condition 6 : check north-west of current box
            if (id > 9 && !isLeftEdge && boxElements[id - 1 - width].classList.contains("bomb")) totalBombs++;
            // Condition 7 : check south-west of current box
            if (id < 90 && !isLeftEdge && boxElements[id - 1 + width].classList.contains("bomb")) totalBombs++;
            // Condition 8 : check south-east of current box
            if (id < 90 && !isRightEdge && boxElements[id + 1 + width].classList.contains("bomb")) totalBombs++;
            box.setAttribute("total", totalBombs);
        }
    }
}

// actions to be taken when a box is clicked.
window.addEventListener("click", event => {
    if (event.target.classList.contains("checked") || event.target.classList.contains("flag")) return;
    if (event.target.classList.contains("bomb")) alert("game over");
    if (event.target.classList.contains("valid")) {
        event.target.innerHTML = event.target.getAttribute("total") == 0 ? "" : event.target.getAttribute("total");
        checkBox(event.target);
    }
    event.target.classList.add("checked");
})

/* Learnings:
    1. fill() method changes all elements in an array to the specified static value.
    2. parseInt() used to convert the given value to Integer.
    3. contains() to check if the element has the specified value.
*/