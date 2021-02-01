const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (+date == Infinity) throw Error;
	if (typeof date != "string") throw Error;
	if (date == undefined || date == null)
		return "Unable to determine the time of year!";
	let newArray = date.split("");
	if (+newArray[1] >= 12 || newArray[1] <= 2) return "winter";
	if (+newArray[1] >= 3 && newArray[1] <= 5) return "spring";
	if (+newArray[1] >= 6 && newArray[1] <= 8) return "summer";
	if (+newArray[1] >= 9 && newArray[1] <= 11) return "autumn";
};
