// __proto__
// prototype

// const obj = {
//   name: "john",
//   greet: function () {
//     console.log(this.name);
//   },
// };
// const obj2 = {
//   name: "ali",
//   __proto__: obj,
// };

// console.log(obj2.greet());

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(this.name);
};
// Object.setPrototypeOf(Person, { isDOne: false });
Person.prototype.Log = function () {};

const person = new Person("umar", 12);

// console.log(person);

// person.greet();

// console.log(Person.prototype);
// console.log(person.__proto__);

console.log(Object.getPrototypeOf(person));
