import { getGameStateInputs } from "./input.js";

const gameContainer = document.querySelector(".game");
const GAME_STATE = getGameStateInputs();

let setPosition = (player) => {
    player.style.transform = `translate(${GAME_STATE.x}px, ${GAME_STATE.y}px)`;
}

let createPlayer = () => {
    const player = document.createElement("img");
    player.src = "img/player-blue-1.png";
    player.className = "player";
    gameContainer.appendChild(player);
    setPosition(player);
}
createPlayer();