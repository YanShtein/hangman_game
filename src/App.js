import { useState } from "react";
import AlphabetBoard from './components/AlphabetBoard';
import GuessBoard from "./components/GuessBoard";
import { randomWord } from "./words";


function Hangman() {
  const [word, setWord] = useState(randomWord('everyday'));
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

  function resetGame(category) {
    let newRandom = randomWord(category);
    setWord(newRandom);
    setGuessedArr(newRandom.split('').fill(''));
    setTriesLeft(6);
    setWinOrLose();
  };

  return (
    <div className="board">
      <div className="board-header">
        <p>The Hangman game: <b>{triesLeft}</b> guesses left. {winOrLose}
          <button type="button" onClick={() => resetGame('everyday')}>Start Over!</button>
        </p>
        <p>{word}</p>
      </div>      
      <GuessBoard guessedArr={guessedArr}/>
      <AlphabetBoard word={word} handleGuess={handleGuess} winOrLose={winOrLose}/> 
      <button onClick={() => resetGame('food')}>Food</button>
      <button onClick={() => resetGame('programming')}>Programming</button>
      <button onClick={() => resetGame('everyday')}>Everyday</button>
      <button onClick={() => resetGame('sports')}>Sports</button>
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
