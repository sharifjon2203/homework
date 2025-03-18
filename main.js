import http, { createServer } from "node:http";
import url from "node:url";
import querystring from "node:querystring";

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
  // const parsedUrl = url.parse(request.url, true);
  const [, moduleName, id] = url.parse(request.url, true).pathname.split("/");

  console.log({
    parsedUrl,
    method,
  });

  if (method === "GET" && moduleName === "/") {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write(`
                 <h1>Home</h1>
                 <p>This is the home page</p>
              `);
    response.end();
  } else if (method === "GET" && moduleName === "products") {
    // response.writeHead(200, "Content-type", "application/json");
    response.writeHead(200, { "Content-type": "application/json" });
    response.write(JSON.stringify(products));
    response.end();
  } else if (method === "POST" && moduleName === "products") {
    let body = "";

    request.on("data", (chunk = "") => {
      body += chunk.toString();
    });

    request.on("end", () => {
      // const data = JSON.parse(body);
      const data = querystring.parse(body);

      console.log({ data });

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
  } else if (method === "PUT") {
    if (moduleName === "products") {
      const params = parsedUrl.path.split("/");

      const id = Number.parseInt(params[params.length - 1]);

      let body = "";
      request.on("data", (ch) => {
        body += ch;
      });

      request.on("end", () => {
        const data = querystring.parse(body);

        const index = products.findIndex((product) => product.id === id);

        console.log({
          data,
          index,
          id,
          params,
        });
        if (index < 0) {
          response.writeHead(404, "Content-type", "text/plain");
          response.write("Product Not found! ");
          response.end("end");
          return;
        }

        const product = products[index];
        const newProduct = {
          ...product,
          ...data,
        };

        products.splice(index, 1, newProduct);

        response.writeHead(200, "Content-type", "text/plain");
        response.write("Updates");
        response.end("end");
      });
    }
  } else {
    response.writeHead(404, "Content-type", "text/plain");
    response.write("Not found! ");
    response.write("salom dunyo");
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
