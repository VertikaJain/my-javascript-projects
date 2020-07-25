const canvasContainer = document.getElementById("myCanvas");
let ctx = canvasContainer.getContext("2d");

// Creating new elements
let bird = document.createElement("img"); // This is equivalent to => let bird = new Image();
let backGround = new Image();
let foreGround = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();

let fly = new Audio();
let scr = new Audio();

// Assigning media content to elements
bird.src = "images/bird.png";
backGround.src = "images/bg.png";
foreGround.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

fly.src = "sounds/fly.mp3";
scr.src = "sounds/score.mp3";

let birdState = { x: 10, y: 150 }; // coordinates of bird
let pipes = [];
pipes[0] = { x: canvasContainer.width, y: 0 };
let score = 0;

// move bird upwards on keydown event
window.addEventListener("keydown", () => {
    birdState.y -= 25;
    fly.play();
})

// method to draw elements on the canvas
let draw = () => {
    ctx.drawImage(backGround, 0, 0);
    // move pipes along the game screen
    for (let pipe of pipes) {
        let gap = pipeNorth.height + 85; // gap b/w north & south pipes
        ctx.drawImage(pipeNorth, pipe.x, pipe.y);
        ctx.drawImage(pipeSouth, pipe.x, pipe.y + gap);
        pipe.x--;
        if (pipe.x === 125) {
            pipes.push({
                x: canvasContainer.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
            });
        }
        // check collision of elements
        if (birdState.x + bird.width >= pipe.x && birdState.x <= pipe.x + pipeNorth.width
            && (birdState.y <= pipe.y + pipeNorth.height || birdState.y + bird.height >= pipe.y + gap)
            || birdState.y + bird.height >= canvasContainer.height - foreGround.height) {
            location.reload();
        }
        // increase score when pipe crosses the position of bird
        if (pipe.x === 5) {
            score++;
            scr.play();
        }
    }
    ctx.drawImage(foreGround, 0, canvasContainer.height - foreGround.height); // to place foreGround image at the bottom of the canvas
    ctx.drawImage(bird, birdState.x, birdState.y += 1.5); // move the bird downward
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : " + score, 10, canvasContainer.height - 20);
    requestAnimationFrame(draw);
}

/*
    Learnings:
    1. getContext() used to access the drawing context of the canvas element
    2. drawImage() draws an image, canvas, or video onto the canvas, at the specified positions.
    3. fillStyle property is used to render the text in another color/gradient.
    4. font property is used to specify font and font size.
    5. fillText() draws filled text on the canvas.
*/