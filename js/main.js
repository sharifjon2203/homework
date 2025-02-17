// function reverse() {
// 	const str = prompt("So'zni kirit!.");
// 	const len = str.length;
// 	if (len === 0) {
// 		alert("Iltimos va buyroq so'z kirit");
// 	}
// 	let reverseStr = "";
// 	for (let i = len - 1; i >= 0; i--) {
// 		reverseStr += str[i];
// 	}
// 	return reverseStr;
// }

// const result = reverse();

// alert(result);

// str = "hello"
// 			 01234
// len = 5
// str[5]

// const person = {
// 	name: "salom",
// };

// const cLogger = (message) => {
// 	console.log(message);
// };

// const alertLogger = (message) => {
// 	alert(message);
// };

// const pow = (a, b, callback) => {
// 	const result = a ** b;
// 	callback(result);
// };

// pow(7, 5, cLogger);

// pow(4, 8, alertLogger);

// let counter = 0;

// function increment() {
// 	counter++;
// }

// function decriment() {
// 	counter--;
// }

const promptFunc = (message) => prompt(message);

const promptInTerminal = (message) => prompt(message);

// promptFunc("Salom istalgan sonni kiriting?");

// promptFunc("yoshingizni kiriting?");

function reverse(callback) {
	const input = callback("Iltimos ismizni kiriting?");

	console.log(input);
}

// reverse(promptFunc);
