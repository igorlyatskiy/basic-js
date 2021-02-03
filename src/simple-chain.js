const CustomError = require("../extensions/custom-error");
const chainMaker = {
	array: [],
	getLength() {
		return this.array.join("~~").length;
	},
	addLink(value) {
		if (typeof value != "undefined") {
			if (value === null) {
				this.array.push("( )");
			} else if (typeof value === "number" && Number.isInteger(value)) {
				this.array.push(`( ${value} )`);
			}
		} else throw Error;
	},
	removeLink(position) {
		if (typeof position === "number" && Number.isInteger(position)) {
			for (let value of this.array) {
				if (parseInt(value) === position) {
					this.array.splice(indexOf(value), 1);
				} else throw Error;
			}
		} else throw Error;
	},
	reverseChain() {
		this.array = this.array.reverse();
	},
	finishChain() {
		return this.array.join("~~");
	},
};

module.exports = chainMaker;
