const nameInputElement = document.querySelector("#name");
const emailInputElement = document.querySelector("#email");
const passInputElement = document.querySelector("#password");
const btnInputElement = document.querySelector("#send-btn");

const myFormElement = document.querySelector("#myForm");

myFormElement.addEventListener("submit", function submit(e) {
	e.preventDefault();

	const formData = {};
	const data = new FormData(this);

	for (const [key, value] of data) {
		formData[key] = value;
	}

	console.log(formData);
});

// btnInputElement.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	// 	const nameValue = nameInputElement.value;
// 	// 	const emailValue = emailInputElement.value;
// 	// 	const passValue = passInputElement.value;

// 	// 	console.log({ nameValue, emailValue, passValue });

// 	console.log();
// });

// static method

// class Person {
//   run() {
//     console.log("person running");
//   }

//   static calc(a, b) {
//     console.log("result ", a + b);
//   }
// }

// Math.floor(x);

// String.apply(thisArg);

// Array.from(arrayLike);
// Object.keys(o);
// Object.values(o);
// Object.entries(o);
// Object.create(o);

// Date.now();

// const result = Person.calc(10, 23);
// console.log(result);

// const person = new Person();

// person.run();

// class GPU {}
// class RAM {}
// class CPU {}

// class LAPTOP {
//   constructor(cpu, gpu, ram) {
//     this.gpu = gpu;
//     this.cpu = cpu;
//     this.ram = ram;
//   }
// }

// const ram = new RAM();
// const gpu = new GPU();
// const cpu = new CPU();

// const laptop = new LAPTOP(cpu, gpu, ram);
