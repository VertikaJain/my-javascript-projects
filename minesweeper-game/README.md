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
3. Create the board by adding 100 boxes to it, using createElement(), setAttribute() & AppendChild() in the for loop.
4. Create a ShuffledArray that includes bomb & other elements at random position, and add it to each box in the for loop using box.classList.add().
5. In method addNumbersToBoard(), specify conditions to add number of neighbouring bombs to the each valid (non-bomb) box. 
7. Use setAttribute() to add the "total" attribute and it's value to each valid box element.

## Resources

1. [MineSweeper using JS](https://www.youtube.com/watch?v=W0No1JDc6vE&t)
