// function fib(n) {
// 	if (n === 1) {
// 		return 1;
// 	}

// 	return n * fib(n - 1);
// }

// function fib(n) {
// 	let result = 1;
// 	for (let i = 1; i <= n; i++) {
// 		result *= i;
// 	}
// 	return result;
// }
// const input = +prompt("Numbera?");

// alert(fib(input));

// const b = () => {
// 	console.log("a");
// };
// function a() {
// 	return b;
// }

// const result = a();

// result();

/// => (7)(5) -> [7, 14, 21, 28, 35]
// => (2)(4) -> [2, 4, 6, 8]
// => (3)(2) -> [3, 6]

const pow = (a) => {
	return (b) => {
		const arr = [];
		for (let i = 1; i <= b; i++) {
			arr.push(a * i);
		}
		return arr;
	};
};

const result = pow(5)(5);

console.log(result);

// const result = resultFunc(3);

// console.log(result);
