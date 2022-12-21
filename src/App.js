import { useState, useEffect } from "react";
import AlphabetBoard from './components/AlphabetBoard';
import { randomWord } from "./words";


function GuessBoard ({ guessedArr }) {
  return (
    <div className="board-guess">
      {
        guessedArr.map((char, id) => {
          return (
            <div key={id} className="board-guess_char">
              <span>{char}</span>
            </div>
          )
        })
      }
    </div>
  );
};

function Hangman() {
  const [word, setWord] = useState(randomWord());
  const [guessedArr, setGuessedArr] = useState(word.split('').fill(''));
  const [triesLeft, setTriesLeft] = useState(6);
  const [winOrLose, setWinOrLose] = useState();

  function handleGuess(e) {
    const letter = e.target.value;
    if (word.indexOf(letter) !== -1) {
      handleCharFound(letter)
    } else {
      handleLeftGuesses();
    }
  }; 
  console.log(word)
  function handleCharFound(letter) {
    let newGuessedArr = [...guessedArr];
    word.split('').forEach((char,i) => {
      if (letter === char) newGuessedArr[i] = letter;
    });
    setGuessedArr(newGuessedArr);
    if (word === newGuessedArr.join('')) {
      setWinOrLose('You won!');
    };
  };

  function handleLeftGuesses() { 
    let left = triesLeft - 1;
    if (left < 1) {
      setWinOrLose('You Lose!');
      setGuessedArr(word.split(''));
    }
    setTriesLeft(left);
  }

  function resetGame() {
    let newRandom = randomWord();
    setWord(newRandom);
    setGuessedArr(newRandom.split('').fill(''));
    setTriesLeft(6);
    setWinOrLose();
  };

  return (
    <div className="board">
      <div className="board-header">
        <p>The Hangman game: <b>{triesLeft}</b> guesses left. {winOrLose}
          <button type="button" onClick={resetGame}>Reset</button>
        </p>
        <p>{word}</p>
      </div>      
      <GuessBoard guessedArr={guessedArr}/>
      <AlphabetBoard word={word} handleGuess={handleGuess} winOrLose={winOrLose}/> 
    </div>
  )
};


function App() {
  return (
    <div className="container">
      <Hangman />
    </div>
  );
}

export default App;
