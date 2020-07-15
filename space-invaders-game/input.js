const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const GAME_STATE = { // position 
    x: GAME_WIDTH / 2, // at the center of screen
    y: GAME_HEIGHT - 50, // placed little above the bottom
    leftPress: false,
    rightPress: false,
    spacePress: false
};

window.addEventListener("keydown", (event) => {    
    if (event.code === "ArrowLeft") {
        GAME_STATE.leftPress = true; 
    } else if (event.code === "ArrowRight") {
        GAME_STATE.rightPress = true; 
    } else if (event.code === "Space") {
        GAME_STATE.spacePress = true;
    }
})

window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
        GAME_STATE.leftPress = false; 
    } else if (event.code === "ArrowRight") {
        GAME_STATE.rightPress = false; 
    } else if (event.code === "Space") {
        GAME_STATE.spacePress = false;
    }
})

export let getGameStateInputs = () => {
    return GAME_STATE;
}