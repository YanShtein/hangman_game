function AlphabetBoard({ handleGuess }) {
  
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  return (
    <div className="board-keyboard">
      {
        alphabet.map((letter, id) => {
          return (
            <div key={id} className="board-keyboard_btn">
              <button value={letter} onClick={e => {
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