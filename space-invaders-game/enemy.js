import { getGameStateInputs } from "./input.js";
const GAME_STATE = getGameStateInputs();

// method to create enemy at the specified row & column of screen
export let create = (gameContainer, enemyColumn, enemyRow) => {
    let enemyElement = document.createElement("img");
    enemyElement.src = "img/enemy-blue-1.png";
    enemyElement.className = "enemy";
    gameContainer.appendChild(enemyElement);
    GAME_STATE.enemies.push({ enemyColumn, enemyRow, enemyElement });
    enemyElement.style.transform = `translate(${enemyColumn}px, ${enemyRow}px)`;
}

// method to update enemy movement on the screen
export let update = (deltaTime, gameContainer) => {
    // using sin & cos methods to rotate the enemy constantly
    const dx = Math.sin(GAME_STATE.lastTime / 1000) * 50;
    const dy = Math.cos(GAME_STATE.lastTime / 1000) * 10;
    for (let enemy of GAME_STATE.enemies) {
        const x = enemy.enemyColumn + dx;
        const y = enemy.enemyRow + dy;
        enemy.enemyElement.style.transform = `translate(${x}px, ${y}px)`;
    }
    GAME_STATE.enemies = GAME_STATE.enemies.filter(enemy => !enemy.isDestroyed); // necessary to filter the GAME_STATE or else it will result to error
}

// method to destroy enemy on hit by laser
export let destroy = (gameContainer, enemy) => {
    gameContainer.removeChild(enemy.enemyElement); // remove the enemy element from the DOM
    enemy.isDestroyed = true;
}