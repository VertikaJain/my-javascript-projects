import { snakeOnFood, expandSnake } from "./snake.js";

let food = { x: 10, y: 1 };
const expansionRate = 1;
export let update = () => {
    if (snakeOnFood(food)) {
        expandSnake(expansionRate);
        food = { x: 20, y: 20 };
    }
}

export let draw = (gameBoard) => {
    let element = document.createElement("div");
    element.style.gridRowStart = food.y;
    element.style.gridColumnStart = food.x;
    element.classList.add("food");
    gameBoard.appendChild(element);

}