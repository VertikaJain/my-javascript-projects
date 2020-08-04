import { checkBox } from "./recurse.js";

const gridContainer = document.querySelector(".grid");
const GRID_WIDTH = 100;
let bombCount = 20;
let isGameOver = false;
let flag = 0;

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
        box.setAttribute("id", i);
        box.classList.add(shuffledArray[i]); // add bomb/valid classes to the boxes on the grid
        gridContainer.appendChild(box);
        box.addEventListener("click", () => click(box));
        box.oncontextmenu = event => {
            event.preventDefault();
            addFlag(box); // add flag on right click
        }
    }
}

export const boxElements = gridContainer.children;
export const width = 10; // width of one column

// method to add flags when right clicked on a box containing bomb.
let addFlag = box => {
    if (isGameOver) return;
    if (!box.classList.contains("checked") && (flag < bombCount)) {
        if (!box.classList.contains("flag")) {
            box.classList.add("flag");
            box.innerHTML = "🚩";
            flag++;
            gameWin();
        } else {
            box.classList.remove("flag");
            box.innerHTML = "";
            flag--;
        }
    }
}

// method to add number of neighbouring bombs to the each valid (non-bomb) box.
let addNumbersToBoard = () => {
    for (let box of boxElements) {
        let totalBombs = 0;
        let id = parseInt(box.id);
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
export let click = box => {
    if (isGameOver) return;
    if (box.classList.contains("checked") || box.classList.contains("flag")) return;
    if (box.classList.contains("bomb")) gameOver(box);
    if (box.classList.contains("valid")) {
        box.classList.add("checked");
        let total = box.getAttribute("total");
        if (total != 0) {
            box.innerHTML = total;
            return;
        }
        checkBox(box);
    }
    box.classList.add("checked");
}

// method to declare game Over when player clicks on bomb element.
let gameOver = box => {
    alert("game over");
    isGameOver = true;
    for (let box of boxElements) {
        if (box.classList.contains("bomb")) box.innerHTML = "💣";
    }
}

// method to declare game Win when the number of flags matches the bomb count.
let gameWin = () => {
    let flagBombMatchCount = 0;
    for (let box of boxElements) {
        if (box.classList.contains("flag") && box.classList.contains("bomb")) {
            flagBombMatchCount++;
        }
        if (flagBombMatchCount === bombCount) {
            alert("you won");
            isGameOver = true;
        }
    }
}

/* Learnings:
    1. fill() method changes all elements in an array to the specified static value.
    2. parseInt() used to convert the given value to Integer.
    3. contains() to check if the element has the specified value.
    4. getAttribute() used to access the attribute specified for the given element.
    5. onContextMenu property fires when the player clicks the right mouse button, opening the context menu.
*/