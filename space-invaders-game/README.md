# Steps for Developing Space Invaders Game using Vanilla JavaScript

## Components of HTML
- Bind CSS styles file using href property in <link> tag
- Game Header
- Game Wrapper
  - Game Div with **dynamic** components added/removed via JS
    - Player
    - Player Laser
    - Enemy
    - Enemy Lasers
  - Game Won Pop-in Box with Restart Button
  - Game Over Pop-in Box with Restart Button
- Game Footer
- Bind game.js file, with **type="module"** to enable use of multiple files, in <script> tags

## CSS Styling
- Binding Animation to HTML element using KeyFrames
  - for Background image scrolling -> background-position-y property
  - for pop-in of Game Over/Won boxes -> transform property

## JavaScript Code Explained

#### game.js file 

1. **createPlayer()** uses createElement(), className & appendChild() to create the Player element.
2. **setPosition()** to dynamically place elements at the given position using element.style.transform property.
3. **update()** A game loop created for animation using window.requestAnimationFrame(update).
   1. Check for Game Over/Won Conditions
   2. updatePlayer() -> calls update() from move.js using import statement
   3. updateLasers() -> calls update() from laser.js using import statement
   4. updateEnemy() -> calls update() from enemy.js using import statement
   5. updateEnemyLaser() -> calls updateEnemyLaser() from enemyLaser.js using import statement
   6. deltaTime -> time elapsed since the previous frame, used in all the update methods, to limit the continuous working of all the functionalities defined further.
4. **createEnemy()** using a nested loop, for y rows & x columns to create enemy elements on the game board.
5. **destroyPlayer()** using removeChild(player) to remove DOM element from Game when attacked by enemy.

***getGameStateInputs()** -> imports all the constants, variables & arrays using GAME_STATE object from input.js*

#### input.js file

1. Exports **GAME_STATE** object with multiple key-value pairs using getGameStateInputs().
2. window.addEventListener("**keydown**", event) -> sets leftPress, rightPress & spacePress properties of GAME_STATE to true.
3. window.addEventListener("**keyup**", event) -> sets leftPress, rightPress & spacePress properties of GAME_STATE to false.

#### move.js file

1. **update()**
   1. method calculates & returns the distance to be moved by the player, based on given speed & the time difference, i.e. delta time (dis=t*s)
   2. calls createLaser() when spacePress is set True & player's CoolDown value is <= 0
   3. updates firing rate of player by reducing playerCoolDown value when > 0, avoiding continuous laser firing, using delta time.
2. **checkBoundaries()** ensures that the player does not cross the boundaries of the game board box, and redirects it to the corner most position using pre-defined setPosition().

#### laser.js file

1. **createLaser()** uses createElement(), className & appendChild() to create Player Laser elements.
2. **update()**
   1. method to update laser i.e. move it on the game screen w.r.t x-axis, using the position of player, & style.transform property.
   2. uses getBoundingClientRect() to obtain the exact position of laser element on screen while firing it.
   3. checks if laser crosses the game board, & calls destroyLaser().
   4. verifies if laser collides with enemy elements using checkIntersection(), & then calls destroyEnemy().
3. **destroyLaser()** uses removeChild() to remove the DOM element laser from game div.
4. **checkIntersection()** performs hit testing i.e. if elements collide with each other, and returns true/false accordingly.

#### enemy.js file

1. **create()** uses createElement(), className & appendChild() to create Enemy elements, & push() them to enemies[].
2. **update()**
   1. updates the enemy movement on the screen based on given delta time.
   2. uses sin() & cos() methods to rotate the enemy constantly after converting ms to seconds.
   3. calls createEnemyLaser() method periodically, based on enemy cool down value.
   4. updates cooldown value when > 0.
   5. filters enemies[] in GAME_STATE when enemy is destroyed by player, using filter().
3. **destroy()** method to remove enemy element on hit by laser from DOM using removeChild().
4. **randomCoolDown()** assigning random numbers to coolDown value that leads to different firing rate from each enemy element, using Math.random().

#### enemyLaser.js file

1. **createEnemyLaser()** uses createElement(), className & appendChild() to create Enemy Laser elements, & push() them to enemyLasers[].
2. **updateEnemyLaser()** 
   1. method used to update the position of enemy lasers using delta time, hence firing laser towards the player, along the y-axis.
   2. calls destroyLaser() when the enemy lasers reach the boundary of the game board.
   3. uses getBoundingClientRect() to get the current position of laser elements on the screen.
   4. checks collision of enemy lasers with the player, by calling the checkIntersection() method; and calls destroyPlayer() if returned true.
   5. filters enemiesLasers[] in GAME_STATE when laser collides with player or the game boundary, using filter().


## Credits
- Resource for the tutorial of this project : [Frederik De Bleser](https://www.youtube.com/watch?v=H5Stvl_kzag)
- Learning CSS Animation : [w3schools](https://www.w3schools.com/css/css3_animations.asp)
- Using properties of [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)  
