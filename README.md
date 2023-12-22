# Color Guessing Game
## This project is a simple color guessing game built using HTML, CSS, and JavaScript. The game presents the player with a set of colored boxes, and the objective is to guess which color corresponds to the RGB value displayed at the top of the page.

## How to Play
 - The game will display a set of colored boxes and an RGB value at the top.
 - Click on the box that you think matches the RGB value.
 - The game will provide feedback on whether your guess is correct or not.
 - You can reset the game at any time by clicking the "Reset" button.

## Code Structure
 - HTML (index.html)
   The HTML file contains the structure of the webpage. It includes boxes for color selection, a display for the RGB value, a reset button, and an output message.

 - CSS (styles.css)
   The CSS file styles the elements on the webpage, providing a visually appealing layout for the game.

 - JavaScript (script.js)
   The JavaScript file contains the logic of the color guessing game. Here's a brief overview of the key functions:

## Functions
 - getRandomColor(): Generates a random RGB color.
 - generateRandomColors(num): Generates an array of random colors.
 - pickRandomColor(): Selects a random color from the array.
 - checkColor(event): Checks if the selected color matches the target color and provides feedback.
 - resetGame(): Resets the game with new colors and a new target color.
 - Event listeners are set up to handle button clicks and initialize the game.
