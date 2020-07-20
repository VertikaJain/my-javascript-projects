import { createLaser } from "./laser.js";
import { setPosition } from "./game.js";

const PLAYER_WIDTH = 20;

// the laser has to pause before it can fire again, so we use a firing rate called cooldown period for the laser (avoiding continuous firing)
const LASER_COOLDOWN = 0.5; // half a second -> can alter the laser speed by altering this value (per second)

// method calculates & returns the distance to be moved by the player, based on given speed & the time difference, i.e. delta time. (dis=t*s)
export let update = (GAME_STATE, deltaTime, gameContainer) => {
    if (GAME_STATE.leftPress) GAME_STATE.x -= deltaTime * GAME_STATE.playerMaxSpeed;
    if (GAME_STATE.rightPress) GAME_STATE.x += deltaTime * GAME_STATE.playerMaxSpeed;
    // fire laser only when cool down value is < 0
    if (GAME_STATE.spacePress && GAME_STATE.playerCoolDown <= 0) {
        createLaser(GAME_STATE, gameContainer, GAME_STATE.x, GAME_STATE.y);
        GAME_STATE.playerCoolDown = LASER_COOLDOWN; // so that laser fires only half a second
    }
    if (GAME_STATE.playerCoolDown > 0) {
        GAME_STATE.playerCoolDown -= deltaTime; // ensuring the laser value is also in seconds
    }
    GAME_STATE.x = checkBoundaries(GAME_STATE.x, PLAYER_WIDTH, GAME_STATE.gameWidth - PLAYER_WIDTH);
    const player = document.querySelector(".player");
    setPosition(player);
}

// method to ensure that the player does not cross the boundaries of the game board.
let checkBoundaries = (v, vmin, vmax) => {
    if (v < vmin) return vmin;
    else if (v > vmax) return vmax;
    else return v;
}
