# Steps to Create the Flappy Bird Game

## HTML Content

1. Use <canvas> tags to create a canvas for the game.
2. Inline CSS used to align the canvas & heading to the center of the page.
3. Use onload property in <body> that enables the execution of draw() once the page's elements finish loading.
4. Bind game.js file using <script> tags.

## JavaScript Code

1. Use getContext() to obtain the drawing context of the canvas.
2. Load image & audio content using new Image() & new Audio() respectively.
3. Use src property to assign the media to variables.
4. Create a draw() method which handles all the displaying of elements on the canvas, using the built-in drawImage() method.
5. Use requestAnimationFrame(draw) to enable Game Loop.
6. Create an array of pipes[], to draw multiple pipes on the canvas, by updating the x & y coordinates using Math.random().
7. Use coordinates of the bird and pipes to check for collision of these elements.
    1. If the bird's position on x-axis is equivant to the position of pipe or in-between the width of pipe, and
    2. if the bird's position on y-axis is greater than or equal to the position of North pipe, OR if it is less than or equal to the position of South pipe
    3. Check if the bird reaches the foreGround.
8. Increase score once the pipe crosses the bird without collision.
9. Display the updated score using fillText() on the canvas.


## Credits

1. Tutorial Resource: [freecodecamp](https://www.youtube.com/watch?v=pufKO5EG8nc)
2. Canvas Basics: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)