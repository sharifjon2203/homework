// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.greet = function () {
//     return `Salom, ${this.name}`;
//   };
// }

// const bilolbek = new Person("Bilolbek", 12, "male");
// const usmon = new Person("Usmon", 22, "male");
// const Umar = new Person("Umar", 32, "male");

// class Person2 {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   greet() {
//     return `Salom, ${this.name}`;
//   }
// }

const students = ["John", "Doe", "Jane", "Doe", "Ali", "Vali"];

const callbackfn = (index, item, arr) => {
  console.log({
    index,
    item,
  });
};

students.forEach(callbackfn);
