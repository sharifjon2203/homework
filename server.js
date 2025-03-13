import http from "node:http";

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  const header = request.headers;

  console.log({ url, method, header });
  response.write("ok");
  response.end();
});

server.listen(4000, () => {
  console.log(`Server is running on port ${4000}`);
});
