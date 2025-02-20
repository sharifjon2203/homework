function a(x) {}

a("10");

const b = {
  name: "ali",
  age: 33,
};

// access to the object property
function getAny(obj, key) {
  return obj[key];
}

console.log(getAny(b, "age")); // ali

const c = {
  name: "ali",
  age: 33,
  greet() {
    return `Salom, ${this.name}`;
  },
  greet2: () => {
    return `Salom, ${this.name}`;
  },
};
console.log(c.greet());
console.log(c.greet2());

(() => {})(); // IIFE

const func = function (...arr) {
  return "Hello world";
};
func(1, 2, 3, 4, 5, 6, 7); // [] => [1,2,3,4,5,6,7]
// rest  operator
// spread operator

1.0000000000000001 === 1; // true
const d = Infinity;

console.log(d - d); // Infinity
const MyNumber = {
  MAX_SAFE_INTEGER: 9007199254740992,
};

console.log(MyNumber.MAX_SAFE_INTEGER + 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(1n + 2n);

const e = new Number(1);
const f = Number(1);
console.log(e == f);
console.log(e === f);
