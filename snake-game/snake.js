import { getDirectionInputs } from "./input.js";
export const snakeSpeed = 5;

let newSegments = 0;

// the center postition of the grid
const snakeBodySegments = [{ x: 11, y: 11 }];

export let update = () => {
    const directionInputs = getDirectionInputs();
    addSnakeSegments();
    // goal is to move all the segments after the head of the snake i.e. update them
    for (let i = snakeBodySegments.length - 2; i >= 0; i--) {
        snakeBodySegments[i + 1] = { ...snakeBodySegments[i] };
    }
    // altering the head; Note: -1 for y is moving up the grid & +1 is moving down.    
    snakeBodySegments[0].x += directionInputs.x;
    snakeBodySegments[0].y += directionInputs.y;
}

export let draw = (gameBoard) => {
    // displaying snake element at the center of screen when game begins.
    for (let segment of snakeBodySegments) {
        let element = document.createElement("div");
        element.style.gridRowStart = segment.y;
        element.style.gridColumnStart = segment.x;
        element.classList.add("snake");
        gameBoard.appendChild(element);
    }
}

export let expandSnake = (expandAmount) => {
    newSegments += expandAmount;
}

export let snakeOnFood = (foodPosition) => {
    return snakeBodySegments.some(segment => {
        return checkSnakeAndFoodPosition(foodPosition, segment);
    })
}

// returns true if snake reaches food position.
let checkSnakeAndFoodPosition = (fPos, sPos) => {
    return (fPos.x === sPos.x && fPos.y === sPos.y);
}

// adding segment to snake body once it eats the food.
let addSnakeSegments = () => {
    for (let i = 0; i < newSegments; i++) {
        snakeBodySegments.push({ ...snakeBodySegments[snakeBodySegments.length - 1] });
    }
    newSegments = 0;
}

/*
    Learnings:
    1. export functionality in JS.
    2. Updating the gridRowStart & gridColumnStart properties of CSS using JS.
    3. Using spread operator to avoid overwriting on the original array
    4. some() method returns true or false based on specified condition for an array.
*/