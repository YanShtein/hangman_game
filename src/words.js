const categories = {
  veges: [
    'cucumber', 'tomato', 'lettuce'
  ],
  fruits: [
    'apple', 'banana', 'strawberry'
  ],
  electronics: [
    'computer', 'phone', 'mouse', 'keyboard', 'motherboard', 'graphicscard', 'microphone'
  ],
  general: [
    'glass', 'table', 'sunglasses', 'door', 'bag', 'spoon', 'window', 'curtain', 'kitchen'
  ]
};

function randomWord(choice) {
  switch (choice) {
    case 'veges':
      return categories['veges'][Math.floor(Math.random() * categories['veges'].length)];
    case 'fruits':
      return categories['fruits'][Math.floor(Math.random() * categories['fruits'].length)];
    case 'electronics':
      return categories['electronics'][Math.floor(Math.random() * categories['electronics'].length)];  
    case 'general':
      return categories['general'][Math.floor(Math.random() * categories['general'].length)];
    default:
      console.log('default');
  }
};

export { randomWord };