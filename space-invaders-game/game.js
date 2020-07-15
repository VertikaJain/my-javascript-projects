const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const GAME_STATE = { x: 0, y: 0 }; // position 
const gameContainer = document.querySelector(".game");

setPosition = (player) => {
    player.style.transform = `translate(${GAME_STATE.x}px, ${GAME_STATE.y}px)`;
}

createPlayer = () => {
    GAME_STATE.x = GAME_WIDTH / 2; // at the center of screen
    GAME_STATE.y = GAME_HEIGHT - 50; // placed little above the bottom
    const player = document.createElement("img");
    player.src = "img/player-blue-1.png";
    player.className = "player";
    gameContainer.appendChild(player);
    setPosition(player);
}
createPlayer();

window.addEventListener("keydown", (event) => {
    const player = document.querySelector(".player");
    if (event.code === "ArrowLeft") {
        GAME_STATE.x -= 5;
    } else if (event.code === "ArrowRight") {
        GAME_STATE.x += 5;
    }
    setPosition(player);
})