const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(flag) {
		this.flag = flag;
	}
	encrypt(message, key) {
		if (typeof message == "undefined" || typeof key == "undefined") throw Error;
		let array = [];
		message = String(message).toUpperCase();
		key = String(key).toUpperCase();
		let newKey = "";
		let k = 0;
		for (let i = 0; i < message.length; i++) {
			if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
				//If letter
				newKey += key[k % key.length];
				k++;
			} else {
				newKey += message[i];
			}
		}
		for (let i = 0; i < message.length; i++) {
			if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
				array.push(
					String.fromCharCode(
						((message.charCodeAt(i) + newKey.charCodeAt(i)) % 26) + 65
					)
				);
			} else {
				array.push(message[i]);
			}
		}
		if (this.flag == true || this.flag == undefined) {
			let templ = array.join("");
			array = [];
			return templ;
		} else {
			let temp = array.reverse().join("");
			array = [];
			return temp;
		}
	}
	decrypt(encryptedMessage, key) {}
}

module.exports = VigenereCipheringMachine;
