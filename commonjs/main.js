// const { div, add } = require("./math");
const math = require("./math");

// console.log(`typeof: ${typeof math}`);
// console.log(math);

// console.log(`add: ${math.add(10, 20)}`);
// console.log(`div: ${math.div(20, 4)}`);
//
//

const result = "hello";

if (typeof result === "string") {
  const { toUpper } = require("./libs");

  const upperedStr = toUpper(result);
  console.log(upperedStr);
}
