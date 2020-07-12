import { snakeOnFood, expandSnake } from "./snake.js";
import { getRandomGridPosition } from "./grid.js";

let food = setRandomFoodPosition();
const expansionRate = 1;

export let update = () => {
    if (snakeOnFood(food)) {
        expandSnake(expansionRate);
        food = setRandomFoodPosition();
    }
}

export let draw = (gameBoard) => {
    let element = document.createElement("div");
    element.style.gridRowStart = food.y;
    element.style.gridColumnStart = food.x;
    element.classList.add("food");
    gameBoard.appendChild(element);
}

// method to set random position for food
function setRandomFoodPosition () {
    let randomFoodPosition;
    /* 
        Condition 1: If randomFoodPosition is undefined then it sets a new value;
        Condition 2: To ensure that the food is never assigned the position of the Snake's body.
    */
    if (randomFoodPosition === undefined || snakeOnFood(randomFoodPosition)) {
        randomFoodPosition = getRandomGridPosition();
    }
    return randomFoodPosition;
}