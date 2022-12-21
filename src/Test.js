export default function Test() {

  const categories = {
    veges: [
      'cucumber', 'tomato', 'lettuce'
    ],
    fruits: [
      'apple', 'banana', 'strawberry'
    ],
  }

  function randomWord(choice) {
    switch (choice) {
      case 'veges':
        return categories['veges'][Math.floor(Math.random() * categories['veges'].length)];
      default:
        console.log('default');
    }
  };

  console.log(randomWord('veges'))


  return (
    <div>test</div>
  )
}