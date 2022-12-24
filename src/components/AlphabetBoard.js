import { useEffect } from "react";

function AlphabetBoard({ handleLetterClicked, winOrLose, clickedLetter }) {
  
  const alphabet = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
    'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  
  // if winOrLose state is updated with state other than empty, return true by disabling all letters.
  // if winOrlose state is empty, check if clickedLetter array includes the letter, and if does disable the button.
  function isDisabled(letter) {
    if (winOrLose) {
      return true;
    } else if (clickedLetter.includes(letter)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPressed);
    return () => document.removeEventListener('keydown', handleKeyPressed);
  });

  function handleKeyPressed(e) {
    e.preventDefault();
    if (alphabet.includes(e.key)) {
      handleLetterClicked(e);
    }
  };

  return (
    <div className="board-keyboard">
      {
        alphabet.map((letter, id) => {
          return (
            <div key={id} className="board-keyboard_btn">
              <button 
                disabled={isDisabled(letter)} 
                value={letter} 
                onKeyDown={e => handleKeyPressed(e)}
                onClick={e => handleLetterClicked(e)}
                >{letter}</button>
            </div>
          )
        })
      }
    </div>
  )
};

export default AlphabetBoard;