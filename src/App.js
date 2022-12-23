import { useState } from "react";
import AlphabetBoard from './components/AlphabetBoard';
import GuessBoard from "./components/GuessBoard";
import { randomWord } from "./words";

function Hangman() {
  const [word, setWord] = useState(randomWord('everyday'));
  const [clicked, setClicked] = useState([]);
  const [selected, setSelected] = useState('everyday');
  const [guessedArr, setGuessedArr] = useState(word.split('').fill('')); // only guessed letters
  const [lives, setLives] = useState(6);
  const [winOrLose, setWinOrLose] = useState();

  function clickedLetter(e) {
    const letter = e.target.value;
    setClicked([...clicked, letter]);
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

  function resetGame(cat) {
    let newRandom = randomWord(cat);
    setWord(newRandom);
    setGuessedArr(newRandom.split('').fill(''));
    setLives(6);
    setWinOrLose();
    setSelected(cat);
    setClicked([]);
  };

  return (
    <div className="container">
      <div className="hangman">
        <div className="header">
          <h2>THE HANGMAN</h2>
          <small>- Simple React guess the word game -</small><br/>
          <small>Finish the word, before lives depleted.</small>
        </div>
        <div className="categories">
          <button 
            className={selected === 'food' ? 'selected' : null} 
            onClick={() => resetGame('food')}>Food ↻</button>
          <button 
            className={selected === 'programming' ? 'selected' : null} 
            onClick={() => resetGame('programming')}>Programming ↻</button>
          <button
            className={selected === 'everyday' ? 'selected' : null}  
            onClick={() => resetGame('everyday')}>Everyday ↻</button>
          <button 
            className={selected === 'sports' ? 'selected' : null} 
            onClick={() => resetGame('sports')}>Sports ↻</button>
        </div>  
        <div className="hangman-img">
          <img src={require('./hangman.jpeg')} alt="hangman" />
          <p>* You have: <b>{lives}</b> lives. *</p>
          <p>{winOrLose}</p>
        </div>
        <div className="board">     
          <GuessBoard guessedArr={guessedArr}/>
          <AlphabetBoard 
            clickedLetter={clickedLetter} 
            winOrLose={winOrLose}
            clicked={clicked}/> 
        </div>
        <small className="footer">Designed & Built by Yan Shtein</small>
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
