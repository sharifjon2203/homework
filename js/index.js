// import { readFile } from "./fs.js";

// const add = (a, b) => a + b;
// const minus = (a, b) => a - b;
/*
function calculate(x, y, callback) {
	const result = callback(x, y);
	if (x > 0 && y > 0) {
		console.log("result ", result);

		return result;
	}
}

const result = calculate(10, 3, add);

const result3 = calculate(20, 10, minus);
console.log("resut2 ", result);
console.log("result3 ", result3);
const zero = 1;
const nol = 0;
if (zero > nol) {
	var name = "ISM";
}

console.log(name);
*/

/*
function counter() {
	let count = 1000;

	function increment(newCount) {
		count += newCount;
	}
	function dicrement(newCount) {
		count -= newCount;
	}

	function getCount() {
		return count;
	}

	return {
		dicrement,
		increment,
		getCount,
	};
}

const result = counter();

result.increment(10);
result.increment(20);
result.increment(40);
result.increment(4);

console.log(result.getCount());

result.dicrement(1000);

console.log(result.getCount());

console.log(result);

*/

// const add = (a) => (b) => (c) => a + b + c;
// add(1)(2)(3);

// const a = [1, 2, 3, 4, 5];

// const b = [11, 22, 33, 44];

// const c = [...a, ...b];

// console.log(c);

function calc(...arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];

		total += element;
	}
	console.log(total);
}

calc(
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	99,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	99,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	99,
);
