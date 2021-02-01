const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw Error;
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "--double-next") {
			newArray.push(arr[i + 1]);
		} else if (arr[i] == "--double-prev") {
			newArray.push(newArray[newArray.length - 1]);
		} else if (arr[i - 1] == "--discard-next") {
			newArray.push("Empty value");
		} else if (arr[i + 1] == "--discard-prev") {
			newArray.push("Empty value");
		} else newArray.push(arr[i]);
	}
	let finalArray = newArray.filter(
		(each) =>
			each != "Empty value" &&
			each != "--discard-next" &&
			each != "--discard-prev" &&
			each != undefined
	);

	return finalArray;
};
