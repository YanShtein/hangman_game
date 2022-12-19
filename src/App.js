import { useState } from "react";
import AlphabetBoard from './components/AlphabetBoard';


const DisplayGuessBoard = ({ lettersGuessed }) => {

  return (
    <div className="guess_board">
      {
        lettersGuessed.map((char, id) => {
          return (
            <div key={id} className="guess_square">
              <span>{char}</span>
            </div>
          )
        })
      }
    </div>
  );
}

function Hangman() {
  const [word, setWord] = useState('welcome');
  const [lettersGuessed, setLettersGuessed] = useState(['', '', '', 'c', '', '', '']);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [winOrLose, setWinOrLose] = useState();
  // const words = ['welcome'];

  return (
    <div className="board">
      <DisplayGuessBoard lettersGuessed={lettersGuessed}/>
      <AlphabetBoard />
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
