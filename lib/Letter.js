class Letter {
	constructor(character) {
		this.character = character.toLowerCase();
		this.visible = this.startingVisibility();
	}

	startingVisibility() {
		const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';
		const allowedArr = allowed.split('');
		if (allowedArr.includes(this.character)) return false;
		return true;
	}

	guess(character) {
		if (character === this.character) this.visible === true;
	}
}

module.exports = Letter;
