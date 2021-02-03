const CustomError = require("../extensions/custom-error");
const chainMaker = {
	array: [],
	string: "",
	getLength() {
		return this.array.length;
	},
	addLink(value) {
		if (typeof value === "undefined") {
			value = "( )";
			this.array.push(value);
		} else {
			this.array.push("( " + String(value) + " )");
		}
		return this;
	},
	removeLink(position) {
		if (
			typeof position == "number" &&
			Number.isInteger(position) &&
			position < this.array.length &&
			position >= 0
		) {
			this.array.splice(position - 1, 1);
			return this;
		} else {
			this.array = [];
			throw Error;
		}
	},
	reverseChain() {
		this.array = this.array.reverse();
		return this;
	},
	finishChain() {
		let templ = this.array.join("~~");
		this.array = [];
		return templ;
	},
};

module.exports = chainMaker;
