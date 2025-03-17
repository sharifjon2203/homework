import http, { createServer } from "node:http";
import url from "node:url";

const products = [
  {
    id: 1,
    name: "macbook",
    price: 10000,
    year: 2025,
  },
  {
    id: 2,
    name: "The book",
    price: 2000,
    year: 2024,
  },
];

const PORT = 3000;
const server = createServer((request, response) => {
  const { method } = request;
  const parsedUrl = url.parse(request.url, true);

  if (method === "GET" && parsedUrl.pathname === "/products") {
    response.writeHead(200, "Content-type", "application/json");
    response.write(JSON.stringify(products));
    response.end();
  } else if (method === "POST" && parsedUrl.pathname === "/products") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      const data = JSON.parse(body);
      const newProduct = {
        id: products.length,
        ...data,
      };

      products.push(newProduct);

      response.writeHead(201, "Content-type", "application/json");
      response.write(JSON.stringify(newProduct));
      response.end();
    });

    return;
  } else {
    response.writeHead(404, "Content-type", "text/plain");
    response.write("Not found! ");
    response.end();
  }
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// http://localhost:5000/product
/*
    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: [Object: null prototype] {},
      pathname: '/api/v1/products',
      path: '/api/v1/products',
      href: '/api/v1/products'
    }
  */
// console.log(parsedUrl);

// http://localhost:5000/product -> /product
// http://localhost:5000/api/v1/auth/register -> /api/v1/auth/register
