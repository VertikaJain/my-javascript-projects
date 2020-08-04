# Steps to Create MinesSweeper Game in Vanilla JavaScript

## HTML

1. Create <div> with grid class in the body of HTML.
2. Elements will be dynamically added to this grid div using JS.

## CSS

1. Create a grid layout with 10x10 boxes of 40px each, hence grid size will be 400x400px
2. Specify the size of each box separately, using .grid div { height: 40px; width: 40px; }

## JavaScript Code

1. Create a constant grid Container using querySelector(".grid"), and a const GAME_WIDTH to specify the game size while creating the game board.
2. Use document.addEventListener("DOMContentLoaded"()=>{ } ) for the rest of the game functionality.
3. Create the board using createBoard() method, by adding 100 boxes to it, using createElement(), setAttribute() & AppendChild() in the for loop.
4. Create a ShuffledArray that includes bomb & other elements at random position, and add it to each box in the for loop using box.classList.add().
5. In method addNumbersToBoard(), specify conditions to add number of neighbouring bombs to the each valid (non-bomb) box. 
7. Use setAttribute() to add the "total" attribute and it's value to each valid box element.
8. Add eventListener for click event in createBoard(), and call a new method click(). Then add a new class "checked" on click of a valid box.
9. Assign value of "total" to the valid box using getAttribute(), and then call a new method checkBox() for recursive steps.
10. Create a new file recurse.js and export the checkBox() method.
11. Implement recursion in the checkBox() method, to display total value of neighbouring boxes of the clicked box. The recursion continues until and edge or a bomb is the neighbouring element.
12. Create a gameOver() method, the assigns true to isGameOver variable, and displays all the bombs once a bomb is clicked by the player.
13. Create addFlag() method, to add flags on the boxes that have bomb element and are right clicked by the player, to mark as safe. 
14. Use onContextMenu property in createBoard(), that calls addFlag() on right click on a box with bomb element.
15. Create a gameWin() method to check if the number of flags added by the player matches the total number of bombs. If yes, then the player is declared as Winner. This method is called everytime a flag is added to the game board.

## Resources

1. [MineSweeper using JS](https://www.youtube.com/watch?v=W0No1JDc6vE&t)
2. [About MineSweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game))
