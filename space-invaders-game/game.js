import { getGameStateInputs } from "./input.js";
import { update as updatePlayer } from "./move.js";
import { update as updateLasers } from "./laser.js";
import {
    create as createEnemy,
    update as updateEnemy
} from "./enemy.js";
import { updateEnemyLaser } from "./enemyLaser.js";

const gameContainer = document.querySelector(".game");
const GAME_STATE = getGameStateInputs();

// enemy Grid constants
const ENEMIES_PER_ROW = 10;
const ENEMIES_PER_COLUMN = 3;
const ENEMY_HORIZONTAL_PADDING = 80;
const ENEMY_VERTICAL_PADDING = 70;
const ENEMY_VERTICAL_SPACING = 80;
const enemySpacing = (GAME_STATE.gameWidth - ENEMY_HORIZONTAL_PADDING * 2) / (ENEMIES_PER_ROW - 1);

// method to set position of player on every update & at game start.
export let setPosition = (player) => {
    player.style.transform = `translate(${GAME_STATE.x}px, ${GAME_STATE.y}px)`;
}

// method to create & place the player at the center of the game board.
let createPlayer = () => {
    const player = document.createElement("img");
    player.src = "img/player-blue-1.png";
    player.className = "player";
    gameContainer.appendChild(player);
    setPosition(player);
}
createPlayer();

// method to update the movement of the player -> game loop.
let update = (currentTime) => {
    if (GAME_STATE.gameOver) document.querySelector(".game-over").style.display = "block"; // pop up game-over box
    if (GAME_STATE.enemies.length <= 0) document.querySelector(".game-won").style.display = "block"; // pop up game-win box
    const deltaTime = (currentTime - GAME_STATE.lastTime) / 1000; // convert the time difference from ms to s.
    updatePlayer(deltaTime, gameContainer);
    updateLasers(deltaTime, gameContainer);
    updateEnemy(deltaTime, gameContainer);
    updateEnemyLaser(deltaTime, gameContainer);
    GAME_STATE.lastTime = currentTime;
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update); // game loop initialization.

for (let row = 0; row < ENEMIES_PER_COLUMN; row++) { //total 3 rows.
    const enemyRow = ENEMY_VERTICAL_PADDING + row * ENEMY_VERTICAL_SPACING; // y
    for (let column = 0; column < ENEMIES_PER_ROW; column++) {
        const enemyColumn = column * enemySpacing + ENEMY_HORIZONTAL_PADDING; // x
        createEnemy(gameContainer, enemyColumn, enemyRow);
    }
}

// method to remove player element from DOM once hit by enemy laser
export let destroyPlayer = (gameContainer, player) => {
    gameContainer.removeChild(player);
    GAME_STATE.gameOver = true;
    const audio = new Audio("sound/sfx-lose.ogg");
    audio.play();
}