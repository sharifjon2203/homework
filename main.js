// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet(message) {
//     console.log(message);
//   }
// }

// class Student extends Person {
//   constructor(name, age, univer) {
//     super(name, age);
//     this.univer = univer;
//   }

//   log() {
//     this.greet(`Hello ${this.name}, ${this.univer}`);
//   }
// }
// const luccy = new Person("Luccy", 22);

// luccy.greet();

// const percey = new Person("Percey", 22);

// percey.greet();

// const student = new Student("Abduqodir", 21, "Ko'\cha");

// student.log();

class Person {
  constructor(name) {
    this.name = name;
  }
  set password(pass) {
    this.pass = pass;
  }
  get password() {
    return this.pass;
  }
}
const person = new Person("ALI");
person.password = "qwer12345";

console.log(person.password);

person.password = "asdf qwer";

console.log(person.password);
