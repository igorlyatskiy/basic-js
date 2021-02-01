const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (!date) return "Unable to determine the time of year!";
	else {
		let time = date.toDateString();
		time = date.getMonth();
		if (time >= 2 && time <= 4) return "spring";
		else if (time >= 5 && time <= 7) return "summer";
		else if (time >= 8 && time <= 10) return "autumn";
		else return "winter";
	}
};
