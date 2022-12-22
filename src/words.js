const categories = {
  food: [
    'bacon', 'bagel', 'bread', 'butter', 'beans', 'avocado', 'almond', 'caramel', 'cauliflower', 
    'carrot', 'cornflakes', 'dragonfruit', 'egg', 'flour', 'fish', 'gelatin', 'gravy', 'ginger', 
    'honey', 'herbs', 'icecream', 'jalapeno', 'kebab', 'ketchup', 'kiwi', 'lasagna', 'lobster',
    'macaroni', 'marshmallow', 'margarine', 'mozzarella', 'noodles', 'oregano', 'peanutbutter', 
    'potato', 'ravioli', 'steak', 'taco', 'vanilla','waffle', 'yogurt', 'zucchini'
  ],
  programming: [
    'algorithm', 'argument', 'arrays', 'binary',
    'loops', 'statement', 'variable', 'python', 'javaScript', 'java', 'php', 'ruby', 'unix'
  ],
  everyday: [
    'cupboard', 'battery', 'mirror', 'scissors', 'newspaper', 'alarmclock', 'knife', 'purse', 'magazine', 'passport', 
    'headphone', 'sofa', 'pencil', 'glass', 'laptop', 'fork', 'watch', 'photo', 'camera', 'creditcard', 'mobilephone',
  ],
  sports: [
    'basketball', 'aerobics', 'boxer', 'biking', 'bowling', 'baseball', 'cricket', 'diving',
    'fitness', 'football', 'golf', 'gymnast', 'hockey', 'iceskating', 'jogger', 'karate', 'rockclimbing', 'running',
    'sailing', 'volleyball', 
  ]
};

function randomWord(choice) {
  switch (choice) {
    case 'food':
      return categories['food'][Math.floor(Math.random() * categories['food'].length)];
    case 'programming':
      return categories['programming'][Math.floor(Math.random() * categories['programming'].length)];  
    case 'everyday':
      return categories['everyday'][Math.floor(Math.random() * categories['everyday'].length)];
    case 'sports':
      return categories['sports'][Math.floor(Math.random() * categories['sports'].length)];
    default:
      console.log('default');
  }
};

export { randomWord };