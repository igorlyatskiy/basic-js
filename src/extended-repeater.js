const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	if (options.separator === undefined) options.separator = "+";
	if (options.additionSeparator === undefined) options.additionSeparator = "|";
	if (options.addition === undefined) options.addition = "";

	let addition = "";
	let temp = "";
	temp += options.addition + options.additionSeparator;
	for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
		addition += temp;
	}
	addition += options.addition;
	//////////////////
	let mainTemp = "";
	mainTemp = str + addition + options.separator;
	for (let i = 0; i < options.repeatTimes - 1; i++) {
		str = mainTemp + str;
	}
	str = str + addition;
	return str;
};
