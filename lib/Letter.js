class Letter {
	constructor(char) {
		this.char = char.toLowerCase();

		// all characters are made invisible at the start
		this.visible = false;

		// except symbols, which are made visible
		if (this.isSymbol(this.char)) {
			this.visible = true;
		}
	}

	isSymbol = (char) => {
		const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
		const arr = alphanumeric.split('');
		const isAlphanumeric = arr.includes(char);
		const bool = !isAlphanumeric;
		return bool;
	};

	guess = (char) => {
		if (char.toLowerCase() !== this.char) return false;
		this.visible = true;
		return true;
	};

	toString = () => (this.visible ? this.char : '_');

	getSolution = () => this.char;
}

module.exports = Letter;
