import { getGameStateInputs } from "./input.js";
import { destroyLaser, checkIntersection } from "./laser.js";
import { destroyPlayer } from "./game.js";

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
        if (laser.y >= GAME_STATE.gameHeight - 25)
            destroyLaser(gameContainer, laser);
        laser.laserElement.style.transform = `translate(${laser.x}px, ${laser.y}px)`; //setPosition
        const r1 = laser.laserElement.getBoundingClientRect(); 
        const player = gameContainer.firstElementChild;
        const r2 = player.getBoundingClientRect();
        if (checkIntersection(r1, r2)) { // when enemy's laser hits the player, check for collision
            destroyPlayer(gameContainer, player);
            destroyLaser(gameContainer, laser);
            break;
        }
    }
    GAME_STATE.enemyLasers = GAME_STATE.enemyLasers.filter(eLaser => !eLaser.isDestroyed);
}