import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

emitter.on("pizza", ({ size, type, price = 1000 }) => {
  console.log(
    `Sizni buyurtma keldi: Pizza ${type} , hajmi ${size}, puli ${price}s`,
  );
});

emitter.emit("pizza", { size: "standard", type: "chease", price: 4000 });
