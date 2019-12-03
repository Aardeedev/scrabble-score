//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const tileScores = [
  ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  ['D', 'G'],
  ['B', 'C', 'M', 'P'],
  ['F', 'H', 'V', 'W', 'Y'],
  ['K'],
  [],
  [],
  ['J', 'X'],
  [],
  ['Q', 'Z'],
];

export const score = (string = '') => {
  const wordArray = string.toUpperCase().split('');

  const letterScore = letter =>
    tileScores.findIndex(letters => letters.includes(letter)) + 1;

  const wordScore = letterArray =>
    letterArray.reduce((acc, letter) => acc + letterScore(letter), 0);

  return wordScore(wordArray);
};
