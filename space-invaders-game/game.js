import { getGameStateInputs } from "./input.js";
import { update as updatePlayer } from "./move.js";

const gameContainer = document.querySelector(".game");
const GAME_STATE = getGameStateInputs();
const PLAYER_WIDTH = 20;

// method to set position of player on every update & at game start.
let setPosition = (player) => {
    player.style.transform = `translate(${GAME_STATE.x}px, ${GAME_STATE.y}px)`;
}

// method to ensure that the player does not cross the boundaries of the game board.
let checkBoundaries = (v, vmin, vmax) => {
    if (v < vmin) return vmin;
    else if (v > vmax) return vmax;
    else return v;
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
    let deltaTime = (currentTime - GAME_STATE.lastTime) / 1000; // convert the time difference from ms to s.
    updatePlayer(deltaTime);
    const player = document.querySelector(".player");
    setPosition(player);
    GAME_STATE.x = checkBoundaries(GAME_STATE.x, PLAYER_WIDTH, GAME_STATE.gameWidth - PLAYER_WIDTH);
    GAME_STATE.lastTime = currentTime;
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update); // game loop initialization.