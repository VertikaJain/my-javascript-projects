import { getGameStateInputs } from "./input.js";
import { createEnemyLaser } from "./enemyLaser.js";

const GAME_STATE = getGameStateInputs();
const ENEMY_COOLDOWN = 2.0;

// method to create enemy at the specified row & column of screen
export let create = (gameContainer, enemyColumn, enemyRow) => {
    let enemyElement = document.createElement("img");
    enemyElement.src = "img/enemy-blue-1.png";
    enemyElement.className = "enemy";
    gameContainer.appendChild(enemyElement);
    GAME_STATE.enemies.push({ enemyColumn, enemyRow, coolDown: ENEMY_COOLDOWN, enemyElement });
    enemyElement.style.transform = `translate(${enemyColumn}px, ${enemyRow}px)`;
}

// method to update enemy movement on the screen
export let update = (deltaTime, gameContainer) => {    
    // using sin & cos methods to rotate the enemy constantly after converting ms to seconds
    const dx = Math.sin(GAME_STATE.lastTime / 1000) * 50;
    const dy = Math.cos(GAME_STATE.lastTime / 1000) * 10;
    for (let enemy of GAME_STATE.enemies) {
        const x = enemy.enemyColumn + dx;
        const y = enemy.enemyRow + dy;
        enemy.enemyElement.style.transform = `translate(${x}px, ${y}px)`;
        if (deltaTime > 0)
            enemy.coolDown -= deltaTime;
        if (enemy.coolDown <= 0) {
            createEnemyLaser(gameContainer, x, y);
            enemy.coolDown = ENEMY_COOLDOWN;
        }
    }
    GAME_STATE.enemies = GAME_STATE.enemies.filter(enemy => !enemy.isDestroyed); // necessary to filter the GAME_STATE or else it will result to error
}

// method to destroy enemy on hit by laser
export let destroy = (gameContainer, enemy) => {
    gameContainer.removeChild(enemy.enemyElement); // remove the enemy element from the DOM
    enemy.isDestroyed = true;
}

/*
    Learnings:
    1. sin() & cos() return numeric value b/w -1 & 1.
*/