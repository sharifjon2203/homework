import fsPromise from "node:fs/promises";
import fs from "node:fs";
import { join } from "node:path";

const appFilePath = join(import.meta.dirname, "app.txt");
const appDirFilePath = join(import.meta.dirname, "app", "main", "lib", "node");

fs.readdir(process.cwd(), (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const filePath = join(process.cwd(), file);
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(file, stats.isFile() ? "Bu file" : "bu folder");
    });
  });
});

/*
fs.watch(import.meta.dirname, (eventType, filename) => {
  console.log({ eventType, filename });
});
 */

// fsPromise.mkdir(appDirFilePath, { recursive: true });

/*
fs.unlink(appFilePath, (err) => {
  if (err) {
    console.error(err);
  }
});
*/
// fsPromise.unlink(appFilePath);
// fs.writeSync(appFilePath, "Buffer");
// fs.appendFile(appFilePath, "\tNIma gaplar!!!");
/*
fs.writeFile(appFilePath, "Hello from fs module", "utf-8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
*/
/*
fs.readFile("./app.txt", "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("Bunday file topilmadi!.");
      return;
    }
  }
  console.log(data);
});

*/

// const result = fs.readFileSync("./app.txt");
// console.log(result.toString());

/*
fs.stat("../os", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats);
});
*/
