const words = [
  'spoon', 'galaxy', 'welcome', 'computer', 'fork', 'phone'
];


function randomWord() {
  let random = words[Math.floor(Math.random() * words.length)];
  return random;
};

export { randomWord };