import { useState } from "react";
import AlphabetBoard from './components/AlphabetBoard';
import Categories from "./components/Categories";
import GuessBoard from "./components/GuessBoard";
import { randomWord } from "./words";

function Hangman() {
  const [word, setWord] = useState(randomWord('everyday'));
  const [clickedLetter, setClickedLetter] = useState([]);
  const [guessedArr, setGuessedArr] = useState(word.split('').fill('')); // only guessed letters
  const [selectedCat, setSelectedCat] = useState('everyday');
  const [lives, setLives] = useState(6);
  const [winOrLose, setWinOrLose] = useState();

  function handleLetterClicked(e) {
    const letter = e.target.value;
    setClickedLetter([...clickedLetter, letter]);
    handleGuess(letter);
  };

  function handleGuess(letter) {
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
    let left = lives - 1;
    if (left < 1) {
      setWinOrLose('You Lose!');
      setGuessedArr(word.split(''));
    }
    setLives(left);
  };

  function resetGame(category) {
    let newRandom = randomWord(category);
    setWord(newRandom);
    setGuessedArr(newRandom.split('').fill(''));
    setLives(6);
    setWinOrLose();
    setSelectedCat(category);
    setClickedLetter([]);
  };

  return (
    <div className="container">
      <div className="hangman">
        <div className="header">
          <h2>THE HANGMAN</h2>
          <small>- Simple React guess the word game -</small><br/>
          <small>Finish the word, before running out of lives.</small>
        </div>
        <Categories resetGame={resetGame} selectedCat={selectedCat} />
        <div className="hangman-img">
          <img src={require('./hangman.jpeg')} alt="hangman" />
          <p>* You have: <b>{lives}</b> lives. *</p>
          <p>{winOrLose}</p>
        </div>
        <div className="board">     
          <GuessBoard guessedArr={guessedArr}/>
          <AlphabetBoard 
            handleLetterClicked={handleLetterClicked} 
            clickedLetter={clickedLetter}
            winOrLose={winOrLose}/> 
        </div>
        <small className="footer">Designed & Built by <a href="https://github.com/YanShtein"> -Yan Shtein- </a></small>
      </div>
    </div>  
  )
};


function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <Hangman />
    </div>
  );
}

export default App;
