const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let array = [];
	let j = 0;
	if (typeof members == "null" || typeof members == "undefined") return false;
	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] == "string" && members[i].toUpperCase != members[i]) {
			while (members[i][j] == " ") {
				j++;
			}

			array.push(members[i][j]);
		}
	}
	array = array.sort();
	return array.join("");
};
