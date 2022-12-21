export default function GuessBoard ({ guessedArr }) {
  return (
    <div className="board-guess">
      {
        guessedArr.map((char, id) => {
          return (
            <div key={id} className="board-guess_char">
              <span>{char}</span>
            </div>
          )
        })
      }
    </div>
  );
};