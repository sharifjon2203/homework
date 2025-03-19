import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:7070");

ws.on("error", console.error);

ws.on("open", function open() {
  ws.send("something");
});

ws.on("message", function message(data) {
  console.log("received: %s", data);
});

const taxPercentage = 1;

function tax(totalSum, taxPercentage) {
  return totalSum * taxPercentage;
}

tax(100, taxPercentage);
