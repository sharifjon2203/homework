// const promise = new Promise((resolve, reject) => {
// 	const result = Math.round(Math.random() * 10);

// 	if (result >= 5) {
// 		resolve("Siz yutdingiz:)!");
// 	} else {
// 		reject("Siz yuta olmadiz!");
// 	}
// });

// promise
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

// const promise = (result, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (result) {
// 				resolve("Siz yutdingiz!");
// 			} else {
// 				reject("uzur siz yuta olmadiz!");
// 			}
// 		}, delay);
// 	});
// };

// promise(false, 3000)
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

// console.log("uraaaa");

// function add(a, b) {
// 	return a + b;
// }

// console.log(add(1000, 22000202020));

// console.log(1);
// setTimeout(() => {
// 	console.log(3);
// }, 0);

// const promise = new Promise((resolve, reject) => {
// 	console.log(4);
// 	resolve(5);
// });

// promise
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// console.log(2);

// const promise = new Promise((resolve, reject) => {
// 	resolve(1);
// });

// promise
// 	.then((data) => {
// 		console.log(`1 ${data}`);
// 		return data + 1;
// 	})
// 	.then((data) => {
// 		console.log(`2 ${data}`);

// 		return data / 2;
// 	})
// 	.then((data) => {
// 		console.log(`3 ${data}`);
// 	});

// console.time("Promise");

// const promise1 = Promise.resolve(1);

// const promise2 = Promise.reject(2);

// const promise3 = (delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(3);
// 		}, delay);
// 	});
// };

// const promise4 = (delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			reject(4);
// 		}, delay);
// 	});
// };

// const result = Promise.all([promise1, promise2, promise3(100), promise4(4000)]);

// result
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

// console.timeEnd("Promise");

// console.time("Promise");

// const promise1 = Promise.resolve(1);

// const promise2 = Promise.reject(2);

// const promise3 = (delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(3);
// 		}, delay);
// 	});
// };

// const promise4 = (delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			reject(4);
// 		}, delay);
// 	});
// };

// const result = Promise.allSettled([
// 	promise1,
// 	promise2,
// 	promise3(100),
// 	promise4(4000),
// ]);

// result
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.error("xato: ", err);
// 	});

// console.timeEnd("Promise");

// console.time("Promise");

// // const promise1 = Promise.resolve(1);

// const promise2 = Promise.reject(2);

// const promise3 = (delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(3);
// 		}, delay);
// 	});
// };

// const promise4 = (delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			reject(4);
// 		}, delay);
// 	});
// };

// const result = Promise.any([promise2, promise3(100), promise4(4000)]);
// (async () => {
// 	const data = await result;

// 	console.log(data);
// })();

// console.timeEnd("Promise");

// const promise = (delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			reject(new Error("XATOLIK"));
// 		}, delay);
// 	});
// };
// (async () => {
// 	try {
// 		const result = await promise();

// 		console.log(result);
// 	} catch (error) {
// 		console.error(error);
// 	}
// })();

// async function fetchData(url) {
// 	try {
// 		const response = await fetch(url);

// 		if (!response.ok) {
// 			throw new Error("rejected response");
// 		}

// 		const data = await response.json();

// 		console.log(data);
// 	} catch (error) {
// 		throw new Error(error);
// 	}
// }

// fetchData(
// 	"https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
// );
