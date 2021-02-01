const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw Error;
	let newArray = arr;
	for (let i = 0; i < newArray.length; i++) {
		if (typeof newArray[i] == "object") {
			if (i > 0) newArray.splice(i - 1, 1);
			else newArray.shift();
		}
		if (newArray[i] == "--discard-next") {
			if (
				newArray[i + 2] == "--discard-prev" ||
				newArray[i + 2] == "--double-prev"
			) {
				newArray.splice(i + 1, 1);
			}
			if (i <= newArray.length - 2) {
				newArray.splice(i, 1);
			}
			if (i == newArray.length - 1) newArray.pop();
		}
		if (newArray[i] == "--discard-prev") {
			if (i > 1) {
				newArray.splice(i - 2, 2);
			} else if (i == 0) {
				newArray.shift();
			} else if (i == 1) {
				newArray.splice(i - 1, 1);
				newArray.shift();
			}
		}
		/////////////////////////////////////////
		if (newArray[i] == "--double-next") {
			if (i <= newArray.length - 2) {
				delete newArray[i];
				newArray[i] = newArray[i + 1];
			} else newArray.pop();
		}
		if (newArray[i] == "--double-prev") {
			if (i > 0) {
				delete newArray[i];
				newArray[i] = newArray[i - 1];
			} else newArray.shift();
		}
	}
	return newArray;
};
