import path from "node:path";

const filePath = import.meta.filename;
const filePath2 = "/home/pro/dev/app.js";
// console.log(filePath);
// console.log(import.meta.dirname);

// console.log(import.meta.filename);
// console.log(import.meta.url);
// console.log(process.cwd());
// console.log(path.extname(filePath));
// console.log(path.basename(filePath));
// console.log(path.basename(filePath2
// ));

// console.log(
// path.join(import.meta.dirname, "..", "..", "..", "..", "Documents", "word"),
// );
//
// const absolutePath = path.resolve("a.js");

// console.log(absolutePath);
//
console.log(path.format(path.parse(filePath)));
