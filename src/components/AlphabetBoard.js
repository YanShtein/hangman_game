function AlphabetBoard({ handleGuess, winOrLose }) {
  
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

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