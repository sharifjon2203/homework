// import { sort, filter } from "./src/index.js";

// const command = process.argv[2];

/*
if (command === "filter") {
  filter(process.argv[3], process.argv[4]);
} else if (command === "sort") {
  sort(process.argv[3]);
}

*/

/*
switch (command) {
  case "filter":
    filter(process.argv[3], process.argv[4]);
    break;
  case "sort":
    sort(process.argv[3]);
    break;
}

*/

const command = process.argv[2];

const commands = {
  sort(str = "1") {
    console.log(
      str
        .split(",")
        .map((item) => +item)
        .sort((a, b) => b - a),
    );
  },
  filter() {},
  ascii() {},
  uppercase() {},
  uppercase() {},
};

commands[command](process.argv[3]);
