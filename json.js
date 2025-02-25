console.time("JSON");

const obj = {
  type: "Phone",
  price: 120,
  inStock: true,
  feature: ["HD camera", "wifi", "LTE"],
  greet: () => {
    console.log("Hello");
  },
};

const json = JSON.stringify(obj);

console.log(obj);
console.log(json);
console.timeEnd("JSON");

// const result = JSON.parse(json);

// console.log(result);

// try {
// } catch (e) {}
//
// console.table({
//   type: "Phone",
//   price: 120,
//   inStock: true,
//   feature: ["HD camera", "wifi", "LTE"],
//   greet: () => {
//     console.log("Hello");
//   },
// });

try {
} catch (error) {
} finally {
}
