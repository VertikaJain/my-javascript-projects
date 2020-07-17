import { setPosition } from "./game.js";
import { getGameStateInputs } from "./input.js";

const GAME_STATE = getGameStateInputs();
const LASER_MAX_SPEED = 300;

// method to create laser on click of space button
export let createLaser = (gameContainer, x, y) => {
    const laserElement = document.createElement("img");
    laserElement.src = "img/laser-blue-1.png";
    laserElement.className = "laser";
    gameContainer.appendChild(laserElement);
    const laser = { x, y, laserElement };
    GAME_STATE.lasers.push(laser);
    setPosition(laserElement);
    const audio = new Audio("sound/sfx-laser1.ogg");
    audio.play();
}

// method to update laser i.e. move it on the game screen w.r.t x-axis
export let update = (deltaTime, gameContainer) => {
    const lasers = GAME_STATE.lasers;
    // loops through the laser objects stored in game state (these are not DOM elements, instead they contain DOM elements)
    for (let laser of lasers) {
        laser.y -= deltaTime * LASER_MAX_SPEED;
        laser.laserElement.style.transform = `translate(${laser.x}px, ${laser.y}px)`; //setPosition
        // if laser crosses the max (technically min) value of y-axis, then delete it to avoid unnecessary DOM elements of laser
        if (laser.y < 0) {
            destroyLaser(gameContainer, laser);
        }
    }
    GAME_STATE.lasers = GAME_STATE.lasers.filter(laser => !laser.isDestroyed); // necessary to filter the GAME_STATE or else it will result to error
}

// method to delete existing laser from DOM
let destroyLaser = (gameContainer, laser) => {
    gameContainer.removeChild(laser.laserElement); // remove the laser element from the DOM
    laser.isDestroyed = true;
}