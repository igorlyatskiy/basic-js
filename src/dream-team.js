const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let array = [];
	if (!Array.isArray(members)) return false;

	for (let value of members) {
		if (typeof value === "string") {
			for (let j = 0; j < value.length; j++) {
				if (value[j] != " ") {
					array.push(value[j].toUpperCase());
					break;
				}
			}
		}
	}
	array = array.sort();
	return array.join("");
};
