// Window

// const person = {
//   name: "john",
//   age: 25,
//   isStudent: true,
//   address: {
//     city: "Tashkent",
//     street: "Mustaqillik",
//     zip: 100000,
//   },
//   greet: function () {
//     console.log("Hello, I am " + this.name);
//   },
//   that: {
//     username: "najot",
//     skills: ["HTML", "CSS", "JS"],
//     logThis: function () {
//       console.log(this);
//     },
//   },
// };

// // person.that.logThis();
// person.greet();
// let name = "Usmon";

// let age = 12;
// function a() {
//   const b = () => {
//     const b = () => {
//       const b = () => {
//         console.log("this  ", this.age);
//       };
//       b();
//     };
//     b();
//   };
//   b();
// }
// a();

// let obj = {
//   num: 5,
// };

// function add(a, b, c, d, e) {
//   console.log(this);
//   return this.num + a + b;
// }

// console.log(
//   add.call({ name: "ali", age: 12, isStudent: true, num: 33 }, 1, 2, 1, 2, 3),
// );

// const arr = [1, 2, 3, 4, 4];
// console.log(add.call(obj, 10, 20));
// console.log(add.apply(obj, arr));
// const bound = add.bind(obj);
// console.log(bound(5, 10, 1, 4, 5));

// const num = new Number(12);
// const str = new String("salom");
// const num2 = 12;
// // console.log(num + num2);

// // console.log("type of num ", typeof num);
// // console.log("type of num2 ", typeof num2);

// console.log(str.toUpperCase());

// const num = new Number("122");

// const float = 1.234353123213;
// console.log(float.toFixed(2));

// const bool = new Boolean(" ");
// console.log(bool);
//
//
// const pi = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// const min = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(pi);
// console.log(min);

// const date = new Date("2021-12-12");

// console.log(date);

// const arr = [9, 1, 2, 3, 4, 5, 6, 7, 8];

// console.log(Array.isArray(arr));
// console.log(arr);

// const arr = new Array(100);
// const arr = ["samsk?amslkmasma"];

// arr.push("1");
// arr.push("2");
// arr.push("3");
// console.log(arr.push("azimjon"));
// console.log(arr);

// console.log(arr.pop());

// // arr.shift("a");
// // arr.shift("b");
// // arr.shift("o");

// console.log(arr.shift());

// arr.unshift("a");
// arr.unshift("b");
// console.log(arr.unshift("o"));

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, I am " + this.name);
  };
  //
  // const that = {};
  // that.name = name;
  // that.age = age;
  // that.greet = function () {
  //   console.log("Hello, I am " + that.name);
  // };
  // return that;
}

// const person = new Person("John", 25);
// const john = {
//   name: "John",
//   age: 25,
//   greet: function () {
//     console.log("Hello, I am " + this.name);
//   },
// };

// const lucy = {
//   name: "Lucy",
//   age: 22,
//   greet: function () {
//     console.log("Hello, I am " + this.name);
//   },
// };

// const abduvali = {
//   name: "Abduvali",
//   age: 22,
//   greet: function () {
//     console.log("Hello, I am " + this.name);
//   },
// };

// before es6

// const guli = new Person("Guli", 22);
// const azimjon = new Person("Azimjon", 22);
// const abduvali = new Person("Abduvali", 22);
// const lucy = new Person("Lucy", 22);

// console.log(person);
//
//
// const personPrototype = {
//   greet: function () {
//     console.log("Hello, I am " + this.name);
//   },
// };

// // personPrototype.greet();
// const john = Object.create(personPrototype);
// john.name = "John";
// john.age = 25;
// john.greet = function () {
//   console.log("Hello, I am " + this.name);
// };

// john.greet();

// const lucy = {
//   name: "Lucy",
//   age: 22,
//   greet: function () {
//     console.log("Hello, I am " + this.name);
//   },
// };
// lucy.age = 23;
// lucy.gender = "female";

// delete lucy.age;

// const keys = Object.keys(lucy);
// console.log(keys);

// const values = Object.values(lucy);
// console.log(values);

// console.log("name" in lucy);
// console.log(lucy.name);

//object size or length

// console.log(Object.keys(lucy).length);

// for (key in lucy) {
//   console.log(key);
//   console.log(lucy[key]);
// }

// const str = "Hello, I am John";

// for (key in str) {
//   // console.log(key);
//   console.log(str[key]);
// }
//
// const num = [1, 2, 3, 4, 5];

// for (let key in num) {
//   console.log("index ", key);
//   console.log("key ", num[key]);
// }

const john = {
  name: "john",
  age: 25,
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};

// const name = john.name;
// console.log(name);
const name = "asila";
const { name: reName, age } = john;
console.log(reName, age);

const arr = [1, 2, 3, 3, 4, 5, 6, 7];

const [first, sec, ...rest] = arr;
console.log(first);
console.log(sec, rest);
