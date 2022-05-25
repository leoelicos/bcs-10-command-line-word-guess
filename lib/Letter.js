class Letter {
	constructor(char) {
		this.char = char.toLowerCase();
		this.visible = !this.isAlphanumeric();
	}

	isAlphanumeric = () => 'abcdefghijklmnopqrstuvwxyz0123456789'.split('').includes(this.char);

	guessIsCorrect = (char) => char === this.char;

	guess = (char) => (this.visible = this.guessIsCorrect(char));

	toString = () => (this.visible ? this.char : '_');

	getSolution = () => this.char;
}

module.exports = Letter;
