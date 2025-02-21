const students = [
  "John",
  "Doe",
  "Jane",
  "Doe",
  "Ali",
  "Vali",
  "Sanldnlasndflasnflknas",
  "sasa",
];

// const callbackfn = (item, index, arr) => {
//   console.log({
//     index,
//     item,
//     arr,
//   });
// };

// students.forEach(callbackfn);
/*
Array.prototype.aylan = function (callbackfn) {
  for (let i = 0; i < this.length; i++) {
    callbackfn(this[i], i, this);
  }
};

students.aylan((a, index) => {
  console.log(index);
});


const a = (item, index, arr) => {
  console.log(item);
};
students.forEach(a);

const newStudents = students.map((item) => item.toUpperCase());

console.log(newStudents);
console.log(students);

*/

/// ==== FILTER ====

// const filtredStudents = students.filter(
//   (student) => student.length > 3 && student.length < 5,
// );

// console.log(filtredStudents);

// const ages = [12, 44];

// const sumAge = ages.reduce((g, num) => g + num);

// const str = "123";
// const arr = str.split("");
// const sumOfArr = arr.reduce((acc, num) => acc + Number(num), 0);

// Array.prototype.Myreduce = function (callbackfn, initialValue) {
//   let acc = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     acc = callbackfn(acc, this[i]);
//   }
//   return acc;
// };

// Array.prototype.MyMap = function (callbackfn) {
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callbackfn(this[i], i, this));
//   }
//   return newArr;
// };
//
//
// //
// const sumOfStudents = students.reduceRight(
//   (acc, student) => acc + " $ " + student,
//   "",
// );

// console.log(sumOfStudents);

// students.sort();

// console.log(students);

// const ages = [12, 44, 11, 22, 77, 33, 44];

// // ages.sort((a, b) => b - a);
// // console.log(ages);

// const flatedArr = [
//   1,
//   [2, 3, 4],
//   [5, 6, 7],
//   [8, [[9, 10], 11]],
//   [[12, [[[[[[[[[[[[[[[[[[[[[[13]]]]]]]]]]]]]]]]]]]]]]], 13],
// ];
// const flat = flatedArr.flat(Infinity);

// console.log(flat);

function a(str) {
  const arr = [];
  str.split("").forEach((_, index) => {
    const item = str.substring(0, index + 1);
    arr.push(item);
  });
  console.log(arr);
}

a("salom");
