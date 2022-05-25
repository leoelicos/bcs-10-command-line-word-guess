const Letter = require('./Letter');

class Word {
	constructor(string) {
		this.letters = string.split('').map((char) => {
			return new Letter(char);
		});
	}

	printAllLetters() {
		this.letters.forEach((letter) => console.log(letter.char + letter.visible));
	}

	guessLetter(char) {
		let result = false;

		this.letters.forEach((letter) => {
			letter.guess(char);
			if (char === letter.getSolution()) result = true;
		});
		return result;
	}

	guessedCorrectly() {
		return this.letters.every((letter) => letter.visible);
	}

	toString() {
		return this.letters.map(({ toString }) => toString()).join('');
	}
}

module.exports = Word;
