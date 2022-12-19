const AlphabetBoard = () => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  return (
    <div className="letters_board">
      {
        alphabet.map((letter, id) => {
          return (
            <div key={id} className="letter_board">
              <button>{letter}</button>
            </div>
          )
        })
      }
    </div>
  )
};

export default AlphabetBoard;