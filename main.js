// const obj = {
//   name: "ali",
//   age: 11,
//   isStudent: false,
//   hobby: {
//     coding: ["js", "python"],
//     skills: {
//       js: "advanced",
//       py: "inter",
//     },
//   },
// };

// const name = obj.name;
// const age = obj.age;

// const { name: newName, age, isStudent } = obj;

// console.log(newName, age, isStudent);
// const obj2 = JSON.parse(JSON.stringify(obj));

// obj.name = "Shuhrat";
// obj.hobby.skills.py = "advanced";

// console.log("OBJ1 ", obj);
// console.log("OBJ2 ", obj2);

function a({ age = 33, name = "john" }) {
  console.log(name, age);
}

a({});
