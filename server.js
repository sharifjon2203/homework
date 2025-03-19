import express from "express";

// const application = express();
const app = express();

const PORT = 4000;

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
];

// http://localhost:3000 -> GET
// req = > request
// res => response

app.get("/", (request, response) => {
  const { path, params, url, method, headers } = request;
  console.log({
    path,
    params,
    url,
    method,
    headers,
  });

  response.send("Hello from Express.js");
});

// http://localhost:3000/products -> GET -> JSON
// Map -> set routes
// `GET:/products`  ->  (req, res)=> {}

// get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// get product by id
// http://localhost:3000/products/1 -> GET -> JSON
// http://localhost:3000/products/2 -> GET -> JSON
app.get("/products/:id", (req, res) => {
  const params = req.params;
  console.log({ params });

  const productId = parseInt(params.id);
  const product = products.find((product) => product.id === productId);

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
