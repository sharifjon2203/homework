import os from "node:os";
// const os = require("node:os");

// console.log(`Operatsion system type ${os.type()}`);
// console.log(`Platform ${os.platform()}`);
// console.log(`Architectura ${os.arch()}`);
// console.log(`Uptime ${os.uptime() / 3600}`);
// console.log(`Total mem ${os.totalmem() / 1024 ** 3}`);
// console.log(`Free mem ${os.freemem() / 1024 ** 3}`);
// console.log("CPU");
// // console.log(os.cpus());
// // console.log("NEtwork");
// // console.log(os.networkInterfaces());
// console.log(`Home dir ${os.homedir()}`);
// console.log(`TEMP dir ${os.tmpdir()}`);
// console.log(`User info:`, os.userInfo());
// console.log(`COnstats:`, os.constants);

console.log("a");
console.log("c");
console.log("b");

function systemMonitoring() {
  console.clear();
  console.log("-----systemMonitoring----");
  console.log(`Operatsion system type ${os.type()}`);
  console.log(`Platform ${os.platform()}`);
  console.log(`Architectura ${os.arch()}`);
  console.log(`Uptime ${os.uptime() / 3600}`);
  console.log(`Total mem ${os.totalmem() / 1024 ** 3}`);
  console.log(`Free mem ${os.freemem() / 1024 ** 3}`);
  console.log(new Date());
  console.log(os.version());
}

setInterval(() => {
  systemMonitoring();
}, 1000);
