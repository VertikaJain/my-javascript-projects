import { getGameStateInputs } from "./input.js";
const GAME_STATE = getGameStateInputs();

// method calculates & returns the distance to be moved by the player, based on given speed & the time difference, i.e. delta time. (dis=t*s)
export let update = (deltaTime) => {
    if (GAME_STATE.leftPress) GAME_STATE.x -= deltaTime * GAME_STATE.playerMaxSpeed;
    if (GAME_STATE.rightPress) GAME_STATE.x += deltaTime * GAME_STATE.playerMaxSpeed;
}