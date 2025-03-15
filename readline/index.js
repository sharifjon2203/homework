import * as readline from "node:readline/promises";

import { stdin as input, stdout as output } from "node:process";
import { resolve } from "node:dns/promises";

const rl = readline.createInterface({
  input,
  output,
  prompt: ">",
  historySize: 50,
  completer: (line) => {
    const commands = ["add", "list"];
    const hits = commands.filter((c) => c.startsWith(line));
    return [hits.length ? hits : commands, line];
  },
});

rl.prompt();

rl.on("line", async (line) => {
  switch (line.trim().toLowerCase()) {
    case "add":
      const task = await new Promise((resolve) =>
        rl.question("Taskni kiriting: ", resolve),
      );

      if (!task.trim()) {
        console.log("hech narsa yoq");
      }

      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
});

// const answer1 = await rl.question("a sonni kiriting:");
// const answer2 = await rl.question("b sonni kiriting:");

// console.log(`sum of a and b ${+answer1 + +answer2}`);

// rl.close();
