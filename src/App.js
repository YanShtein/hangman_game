import { useState } from "react";
import AlphabetBoard from './components/AlphabetBoard';


function GuessBoard ({ guessedArr }) {
  console.log(guessedArr)
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
  const [incorrectGuesses, setIncorrectGuesses] = useState(6);
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
          console.log(newArr)
        }
      })
    } else {
      if (incorrectGuesses < 1 && guessedArr === word.split('')) {
        setWinOrLose('You won!')
      } else if (incorrectGuesses < 1){
        setWinOrLose('You Lose!')
      } else {
        setIncorrectGuesses(incorrectGuesses - 1);
      }
    }
  };
  
  return (
    <div className="board">
      <div className="board-header">
        <p>The Hangman game: {incorrectGuesses} {winOrLose}</p>
      </div>      
      <GuessBoard guessedArr={guessedArr} />
      <AlphabetBoard word={word} handleGuess={handleGuess}/> 
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
