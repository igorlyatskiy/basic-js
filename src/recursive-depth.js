const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	// constructor() {
	// 	this.templ = 0;
	// }

	calculateDepth(arr) {
		let newArray = [];

		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				if (arr[i].length == 0) arr[i][0] = 0;
				newArray = newArray.concat(arr[i]);
			}
		}

		if (newArray.length == 0) {
			return 1;
		} else return 1 + this.calculateDepth(newArray);
	}
};
