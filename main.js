// const map = new Map();
// // set, get, has , delete, siz
// //

// const mapKey = { key: "12" };
// const mapKeyBool = true;
// const mapKeyNum = 44;
// const mapKeyArr = ["a", "b", "c"];
// const mapKeyFunc = () => {
//   console.log("A");
// };

// map.set("name", "Azimjon");
// map.set("age", 12);

// map.set(mapKey, "nimadur");
// map.set(mapKeyBool, [1, 2, 3, 4, 5]);
// map.set(mapKeyNum, { name: "ali", age: 44 });
// map.set(mapKeyArr, false);
// map.set(mapKeyFunc, { firstName: "Ali", lastName: "Jondosh" });

// console.log({ map: map });
// // sasa
// //
// console.log(map.has(mapKey));
// console.log(map.has(true));
// console.log(map.has(44));
// console.log(map.has(mapKeyArr));
// console.log(map.has(mapKeyFunc));

// //size
// console.log(map.size);

// console.log(map.delete(mapKeyArr));
// console.log(map);

// const result = map.get(mapKeyFunc);
// map.clear();

// console.log(map);

// function MyMap() {
//   this.map = {};
//   this.set = (key, value) => {
//     return this.map[key] ? this.map[key] : (this.map[Symbol(key)] = value);
//   };
//   this.maps = this.map;
// }

// const map = new MyMap();

// map.set("name", "Bilol");
// map.set("name", "Bilol");

// console.log(map.maps);

// const map = new Map([
//   ["key", "value"],
//   ["name", "ali"],
// ]);

// console.log(map);
//
// map.forEach((item, index, arr) => {
//   console.log({ item, index });
// });

// for ([key, value] of map) {
//   console.log({ key, value });
// }

// const arr = [1, 2, 3, 4];

// const [first, secound, ...other] = arr;

// console.log({ first, secound, other });

/*
constact = {
  add (Ism: Alice
  Telefon: 1234567890)
  }

const contacts = {
  map: new Map(),
  add: function (contact) {
    this.map.set(contact.name, contact);
  },
  search: (name) => {
    return this.map.get(name);
  },
  delete: (name) => {
    return this.map.delete(name)
  },
};

*/

/*
function hash222() {
  let map = new Map();
  const key = "hash_222";
  return (num) => {
    console.log(map.has(key));

    if (map.has(key)) {
      console.log(map.get(key));
      return map.get(key);
    }

    const result = (num * num + 1.2) * num - 1234 + 3.12;
    map.set(key, result);
    return result;
  };
}

const hashResult = hash222();
console.log("1: ", hashResult(122));
console.log("2: ", hashResult(122));
console.log("3: ", hashResult(122));
console.log("4: ", hashResult(122));

*/

/*
function call() {
  let isColled = false;

  const calledFunc = () => {
    if (!isColled) {
      console.log("Is called");
      isColled = true;
      return;
    }
    console.log("CHAQIRILIB BO'LINGAN");
  };

  return calledFunc;
}

const res = call();

res();
res();
res();

*/

/*
const arr = [44, 1, 2, 3, 4, 5, 11, 2, 3, 4, 5, 12, 3, 1, 2, 3, 1, 2, 4];
console.log(arr.length);

const uniqueNumbers = new Set(arr);

console.log(uniqueNumbers);


*/

/*
const text = "salom dunyo";

const words = text.split("");

const map = new Map();

words.forEach((word) => {
  console.log(word);
  const count = (map.get(word) || 0) + 1;

  map.set(word, count);
});

console.log(map);

*/

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "john" },
  { id: 1, name: "Alice" },
  { id: 3, name: "umar" },
];

const newArr = users.map((user) => [user.id, user.name]);

/*
[
  [ 1, 'Alice' ],
  [ 2, 'john' ],
  [ 1, 'Alice' ],
  [ 3, 'umar' ]
]
*/

const newMap = new Map(newArr).entries();
console.log([...newMap]);
