const IsogramFinder = function (word) {
  this.word = word.toUpperCase().split('');

}

// IsogramFinder.prototype.isIsogram = function () {
//   let letters = []
//   const containsDuplicates = (letter) => {
//   if (this.word.includes(letter)=== true) {
//     letters.push(letter);
//     if (letters.length > 1) {
//       return false;
//     } else {
//       return true;
//     };
//   };
//   };
// return this.word.every(containsDuplicates);
// };

module.exports = IsogramFinder;


// PangramFinder.prototype.isPangram = function () {
//   const containsLetters = (letter) => this.phrase.split('').includes(letter);
//
//   return this.alphabet.every(containsLetters);
// };
