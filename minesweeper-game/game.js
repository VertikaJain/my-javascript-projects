const gridContainer = document.querySelector(".grid");
const GRID_WIDTH = 100;

document.addEventListener("DOMContentLoaded", () => {
    createBoard();

})

// method to create game board
createBoard = () => {
    for (let i = 0; i < GRID_WIDTH; i++) {
        const box = document.createElement("div");
        box.setAttribute("id", i);
        gridContainer.appendChild(box);
    }
}