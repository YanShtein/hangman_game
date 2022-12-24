import { useState } from "react";
import AlphabetBoard from './components/AlphabetBoard';
import Categories from "./components/Categories";
import GuessBoard from "./components/GuessBoard";
import Canvas from "./components/Canvas";
import { randomWord } from "./words";

function Hangman() {
  const [word, setWord] = useState(randomWord('everyday'));
  const [clickedLetter, setClickedLetter] = useState([]);
  const [guessedArr, setGuessedArr] = useState(word.split('').fill('')); // only guessed letters
  const [selectedCat, setSelectedCat] = useState('everyday');
  const [lives, setLives] = useState(7);
  const [winOrLose, setWinOrLose] = useState();

  // when letter button clicked, save it to clickedLetter array, which will be used for disabling the button once clicked,
  // whenever the game state changes, for example by changing category, all disabled button in the array will be restored.
  function handleLetterClicked(e) {
    let letter = e.target.value;
    if (e.key) {
      if (clickedLetter.includes(e.key)) {
        return;
      } 
      letter = e.key;
    }
    setClickedLetter([...clickedLetter, letter]);
    handleGuess(letter); // after saving the letter to state array, call handleGuess function passing letter as argument.
  };

  // if letter exists in word: call handleCharFound func passing letter as argument.
  // if letter not exist: call handleLeftGuesses func.
  function handleGuess(letter) {
    if (winOrLose) {
      return;
    }
    if (word.indexOf(letter) !== -1) {
      handleCharFound(letter)
    } else {
      handleLeftGuesses();
    }
  }; 

  // copy guessedArr state array to new variable. 
  // for each character in word - if the letter the same as char, save that letter in the same index as char, save the newArray to guessedArr state.
  // if guessedArr state is full, meaning the same as word - game is finished, updating winorlose state to You Win!.
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

  // save lives state to new variable. if lives less than 1, update winorlose state to you lose, 
  // and show correct word by updating guessedArr state with all word chars. else set lives state to the new variable.
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
    setLives(7);
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
        <Canvas lives={lives} />
        <p>*You have: <b>{lives}</b> lives.*</p>
        <p className="winorlose">{winOrLose}</p>
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
