import { getGameStateInputs } from "./input.js";
import { destroyLaser } from "./laser.js";

const GAME_STATE = getGameStateInputs();

// method to create enemy lasers
export let createEnemyLaser = (gameContainer, x, y) => {
    const laserElement = document.createElement("img");
    laserElement.src = "img/laser-red-5.png";
    laserElement.className = "enemy-laser";
    gameContainer.appendChild(laserElement);
    const laser = { x, y, laserElement };
    GAME_STATE.enemyLasers.push(laser);
    laserElement.style.transform = `translate(${x}px, ${y}px)`;
}

export let updateEnemyLaser = (deltaTime, gameContainer) => {
    for (let laser of GAME_STATE.enemyLasers) {
        laser.y += deltaTime * GAME_STATE.laserMaxSpeed; // moving laser down the screen
        if (laser.y >= GAME_STATE.gameHeight)
            destroyLaser(gameContainer, laser);
        laser.laserElement.style.transform = `translate(${laser.x}px, ${laser.y}px)`; //setPosition
    }
    GAME_STATE.enemyLasers = GAME_STATE.enemyLasers.filter(eLaser => !eLaser.isDestroyed);
}