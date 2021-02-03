const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	constructor() {
		this.templ = 0;
	}

	calculateDepth(arr) {
		if (arr === undefined) {
			return this.templ;
		} else {
			if (arr.length === 0) {
				return this.templ / 2;
			} else {
				this.templ++;
				return this.calculateDepth(
					arr.filter((each) => Array.isArray(each))[0]
				);
			}
		}
	}
};
