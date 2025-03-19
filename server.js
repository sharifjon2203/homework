import express from "express";
import { v4 } from "uuid";
// const application = express();
const app = express();

const PORT = 4000;

const products = [];

// use -> middleware GET, POST, PUT, DELETE
app.use(express.json());

//custom middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();

  const end = Date.now();

  console.log(`Request took ${end - start}ms`);
});

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

//get all
app.get("/products", (req, res) => {
  res.json(products);
});

//get one
app.get("/products/:id", (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find((product) => product.id === id);

    if (!product) {
      res.status(404).send("Product not found");
      return;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// create
app.post("/products", (req, res) => {
  try {
    const product = req.body;

    // throw new Error("Something went wrong");

    // validatetion
    if (!product || !product.name || !product.price) {
      res.status(400).send("Name and price are required");
      return;
    }

    product.id = v4();
    products.push(product);

    res.json(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.put("/products/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const productIndex = products.findIndex((product) => product.id === id);
    throw new Error("Something went wrong");
    if (productIndex < 0) {
      res.status(404).send("Product not found");
      return;
    }

    const newProduct = req.body;

    const data = {
      ...products[productIndex],
      ...newProduct,
    };

    products.splice(productIndex, 1, data);

    res.json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// error handling middleware

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const a = {
//   name: "product",
//   price: 100,
// };

// const b = {
//   name: "new Name",
// };

// const c = {
//   ...a,
//   ...b,
// };

// console.log(c);
/*
app.post("/register")
1. register -> method POST > http://localhost:4000/register
    body -> {
        email,
        password,
        confirmPassword,
        name,
        birthday,
        gender,
        phone,
    }
app.post("/login")

2. login -> method POST > http://localhost:4000/login
    body -> {
        email,
        password,
    }
*/
