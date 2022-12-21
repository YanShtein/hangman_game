import { useState } from "react";
import AlphabetBoard from './components/AlphabetBoard';


function GuessBoard ({ guessedArr }) {
  // console.log(guessedArr)
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
  const [word, setWord] = useState('welcome');
  const [guessedArr, setGuessedArr] = useState(Array(word.length).fill(''));
  const [leftGuesses, setLeftGuesses] = useState(6);
  const [winOrLose, setWinOrLose] = useState();
  // const words = ['welcome'];
  function handleGuess(e) {
    const letter = e.target.value;
    if (word.indexOf(letter) !== -1) {
      word.split('').forEach(char => {
        if (letter === char) {
          let indexChar = word.indexOf(char);
          let newArr = [...guessedArr];
          newArr[indexChar] = letter;
          setGuessedArr(newArr)
          // console.log(newArr)
        }
      })
    } else {
      if (leftGuesses >= 1 && guessedArr === word.split('')) { // behaves strange need to implement same char
        setWinOrLose('You won!');
      } else if (leftGuesses < 1) {
        console.log('less than one')
        setWinOrLose('You Lose!');
        setGuessedArr(word.split(''))
        console.log(word.split(''))
      } else {
        setLeftGuesses(leftGuesses - 1);
        
      }
    }
  };

  return (
    <div className="board">
      <div className="board-header">
        <p>The Hangman game: {leftGuesses} {winOrLose}</p>
        {console.log(leftGuesses)}
      </div>      
      <GuessBoard guessedArr={guessedArr} />
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
