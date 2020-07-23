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

let gap = pipeNorth.height + 85; // gap b/w north & south pipes
let gravity = 1;

let draw = () => {
    ctx.drawImage(backGround, 0, 0);
    ctx.drawImage(pipeNorth, 100, 0);
    ctx.drawImage(pipeSouth, 100, gap);
    ctx.drawImage(foreGround, 0, canvasContainer.height - foreGround.height); // to place foreGround image at the bottom of the canvas
    ctx.drawImage(bird, 10, 150 + gravity++);
    requestAnimationFrame(draw);
}

/*
    Learnings:
    1. getContext() used to access the drawing context of the canvas element
    2. drawImage() draws an image, canvas, or video onto the canvas, at the specified positions.
*/