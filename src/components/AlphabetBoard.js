function AlphabetBoard({ handleGuess, winOrLose }) {
  
  const alphabet = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
    'z', 'x', 'c', 'v', 'b', 'n', 'm'];
    
  let disabled = winOrLose ? true : false;

  return (
    <div className="board-keyboard">
      {
        alphabet.map((letter, id) => {
          return (
            <div key={id} className="board-keyboard_btn">
              <button disabled={disabled} value={letter} onClick={e => {
                handleGuess(e);
                e.currentTarget.disabled = true;
              }}>{letter}</button>
            </div>
          )
        })
      }
    </div>
  )
};

export default AlphabetBoard;