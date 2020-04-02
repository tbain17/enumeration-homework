const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('');
  this.phrase = phrase.toUpperCase();
}

// PangramFinder.prototype.toUpperCase = function () {
//   return this.phrase.map((word) => {
//     return word.toUpperCase();
//   });
// };

PangramFinder.prototype.isPangram = function () {
  const containsLetters = (letter) => this.phrase.split('').includes(letter);

  return this.alphabet.every(containsLetters);
};

module.exports = PangramFinder;
