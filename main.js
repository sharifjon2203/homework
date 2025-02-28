// class A {}

// class B extends A {}

// class C extends B {}

// console.log(new B() instanceof C);

// console.log([1] instanceof Array);

// const str = "asasamsdma";
// const str2 = new String("asasamsdma");

// console.log(typeof str2);
// console.log(str2 instanceof String);

// console.log({} instanceof Object);

// const a = 12;
// a.toLowerCase();

// const arr = new Array(
//   1000000000000000000000000000000000000000000000000000000000,
// );

// const url = new URL(
//   "https://www.google.com/search?q=toshkent+metro&sca_esv=8a26c899bd46e931&source=hp&ei=2o3BZ4nXEriUxc8PwPSwiQs&iflsig=ACkRmUkAAAAAZ8Gb6kntsaD5LmVCkGFfmemu-a0ZPLrg&oq=toshkent&gs_lp=Egdnd3Mtd2l6Igh0b3Noa2VudCoCCAAyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAuGIAEMgUQLhiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEC4YgAQyBRAAGIAESKZCUM0IWO47cAh4AJABAJgByAGgAYQQqgEGMC4xMS4xuAEDyAEA-AEBmAIQoALdEKgCAMICCxAuGIAEGNEDGMcBwgILEC4YgAQYxwEYrwHCAgcQABiABBgKwgIHEC4YgAQYCsICDRAuGIAEGMcBGAoYrwHCAgYQABgKGB7CAgUQABjvBcICCBAAGIAEGKIEmAMB8QVmFXDSk8B1IJIHBjQuMTEuMaAHkpgB&sclient=gws-wiz",
// );
// console.log(url);
//
//2

/*
const result = setTimeout(
  (a) => {
    console.log(a);
  },
  10000,
  "HELLO",
);

const idx = setInterval(() => {
  console.log(new Date());
}, 1000);

setTimeout(() => {
  clearTimeout(result);
  clearInterval(idx);
}, 5000);

*/

// throw new Error("XATOLIK");
//
//
// class MyError extends Error {
//   constructor(message) {
//     super(message);
//   }
// }
// console.log(new MyError("XATO") instanceof Error);

// throw new Error("XATOLIK");

// try {
//   // process.exit(1);
//   // throw new Error("XATOLIK");
// } catch (e) {
//   console.log(e.stack); //message , code, stack
// } finally {
//   console.log("FINNALLY");
// }

process.stdout.write("salom\n");

process.stdin.on("data", (data) => {
  console.log(`You typed ${data.toString()}`);
  process.exit();
});
