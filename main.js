import express from "express";
import { v4 } from "uuid";

const app = express();

const PORT = 4000;

const users = new Map();
// key = email
// value = body

app.use(express.json());
app.post("/register", (req, res, next) => {
  try {
    const body = req.body;

    if (
      !body.email ||
      !body.password ||
      !body.confirmPassword ||
      !body.name ||
      !body.birthday ||
      !body.gender ||
      !body.phone
    ) {
      throw new Error("All fields are required");
    }

    if (body.password !== body.confirmPassword) {
      throw new Error("Password and Confirm Password must be same");
    }

    const isUserExist = users.has(body.email);

    if (isUserExist) {
      throw new Error("User already exist");
    }
    body.id = v4();
    users.set(body.email, body);
    res.json({
      message: "User registered successfully",
      body,
    });
  } catch (error) {
    next(error);
  }
});
app.post("/login", (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

// error handling middleware
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
