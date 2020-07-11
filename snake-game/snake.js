export const snakeSpeed = 1;

// the center postition of the grid
const snakeBodySegments = [{ x: 11, y: 11 }];

export let update = () => {

}
export let draw = (gameBoard) => {
    // displaying snake element at the center of screen when game begins.
    for (let segment of snakeBodySegments) {
        let element = document.createElement("div");
        element.style.gridRowStart = segment.x;
        element.style.gridColumnStart = segment.y;
        element.classList.add("snake");
        gameBoard.appendChild(element);
    }

}


/* 
    Learnings:
    1. export functionality in JS.
    2. Updating the gridRowStart & gridColumnStart properties of CSS using JS.
*/