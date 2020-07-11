// file to take all the input info from the user
let directionInputs = { x: 0, y: 0 }; //[{ x: 11, y: 11 }];
let lastInput = { x: 0, y: 0 };

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (lastInput.y !== 0) break; // to avoid 180 degree turn of snake -> necessary to check.
            directionInputs = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (lastInput.y !== 0) break;
            directionInputs = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (lastInput.x !== 0) break;
            directionInputs = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (lastInput.x !== 0) break;
            directionInputs = { x: 1, y: 0 };
            break;
    }
})

export let getDirectionInputs = () => {
    lastInput = directionInputs;
    return directionInputs;
}


/*
    Learnings:
    1. event.key
    2. switch-case
*/