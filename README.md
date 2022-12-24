# The HANGMAN game.

Using React hooks & HTML 2D canvas.

<b>Features:</b>
- Choose between 4 categories.
- Keyboard support.
- Each time an incorrect letter chosen, part of the hangman 2D canvas drawing reveals.

<b>Files structure:</b> 
- src/
  - App.js
  - components/
    - AlphabetBoard.js      <---- Keyboard component (responsible for letter/keyboard button events)
    - Canvas.js             <---- The hangman drawing figure.
    - Categories.js         <---- The categories buttons.
    - GuessBoard.js         <---- Updates according the correct guessed letters.
  - index.js
  - words.js                <---- Words list & reponsible for switching between categories, showing random words.
