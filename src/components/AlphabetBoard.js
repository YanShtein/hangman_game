function AlphabetBoard({ handleLetterClicked, winOrLose, clickedLetter }) {
  
  const alphabet = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
    'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  
  function isDisabled(letter) {
    if (winOrLose) {
      return true;
    } else if (clickedLetter.includes(letter)) {
      return true;
    } else {
      return false;
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