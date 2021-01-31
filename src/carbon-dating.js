const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity != "string" || typeof sampleActivity == "NaN")
		return false;
	if (!isNaN(sampleActivity)) return false;
	if (
		Math.log2(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD < 0 ||
		Math.log2(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD ==
			Infinity ||
		isNaN(Math.log2(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD)
	)
		return false;
	return Math.log2(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD;
};
