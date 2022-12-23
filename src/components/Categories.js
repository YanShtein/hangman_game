export default function Categories({ resetGame, selectedCat }) {
  return (
    <div className="categories">
      <button
        title="42 words"
        className={selectedCat === 'food' ? 'selected' : null} 
        onClick={() => resetGame('food')}>Food ↻</button>
      <button 
        title="13 words"
        className={selectedCat === 'programming' ? 'selected' : null} 
        onClick={() => resetGame('programming')}>Programming ↻</button>
      <button
        title="21 words"  
        className={selectedCat === 'everyday' ? 'selected' : null}  
        onClick={() => resetGame('everyday')}>Everyday ↻</button>
      <button 
        title="20 words"
        className={selectedCat === 'sports' ? 'selected' : null} 
        onClick={() => resetGame('sports')}>Sports ↻</button>
    </div>  
  )
};