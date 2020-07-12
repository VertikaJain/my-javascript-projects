import {
    snakeSpeed,
    update as updateSnake,
    draw as drawSnake,
    getSnakeHead, snakeIntersection
} from "./snake.js";

import {
    update as updateFood,
    draw as drawFood
} from "./food.js";

import { outsideGrid } from "./grid.js";

const gameBoard = document.getElementById("game-board");
let gameOver = false;
let lastRenderTime = 0;

// set game loop
let main = (currentTime) => {
    if (gameOver) {
        if (confirm("You Lost. Press OK to restart the Game.")) {
           location.reload();
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondDifference = (currentTime - lastRenderTime) / 1000; // converting ms to sec
    if (secondDifference < (1 / snakeSpeed)) return; // to move snake per second
    lastRenderTime = currentTime;
    update();
    draw();
}
window.requestAnimationFrame(main);

// method to update the size & position of snake; & position of food; & decision of win/loss
let update = () => {
    updateSnake();
    updateFood();
    checkForDeath();
}

// method to display snake on the basis of update()
let draw = () => {
    gameBoard.innerHTML = ""; // clearing the grid every second to clear the snake
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

// method to check for failure states -> outsideGrid & snakeIntersection.
let checkForDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

/*
    Learnings:
    1. import functionality in JS.
    2. requestAnimationFrame() for game animation -> returns current time in miliseconds.
    3. confirm() method
*/