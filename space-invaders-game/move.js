import { getGameStateInputs } from "./input.js";
const GAME_STATE = getGameStateInputs();
const PLAYER_WIDTH = 20;

// method calculates & returns the distance to be moved by the player, based on given speed & the time difference, i.e. delta time. (dis=t*s)
export let update = (deltaTime) => {
    if (GAME_STATE.leftPress) GAME_STATE.x -= deltaTime * GAME_STATE.playerMaxSpeed;
    if (GAME_STATE.rightPress) GAME_STATE.x += deltaTime * GAME_STATE.playerMaxSpeed;
    GAME_STATE.x = checkBoundaries(GAME_STATE.x, PLAYER_WIDTH, GAME_STATE.gameWidth - PLAYER_WIDTH);
}

// method to ensure that the player does not cross the boundaries of the game board.
let checkBoundaries = (v, vmin, vmax) => {
    if (v < vmin) return vmin;
    else if (v > vmax) return vmax;
    else return v;
}