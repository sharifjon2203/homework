import express from "express";
import { v4 } from "uuid";
import path from "node:path";
import cookieParser from "cookie-parser";
import { CustomError } from "./libs/index.js";
import {
  articleRouter,
  authRouter,
  homeRouter,
  todoRouter,
  userRouter,
} from "./routes/index.js";
import { errorMiddleware } from "./middlewares/index.js";

const app = express();

const PORT = 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(express.static("public"));

app.use("/static", express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

//custom middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const end = Date.now();
  console.log(`Request took ${end - start}ms`);
});

app.get("/", (req, res, next) => {
  try {
    res.render("pages/index", { title: "Home", page: "Home page" });
  } catch (error) {
    next(error);
  }
});

//auth/login
//auth/register
//auth/logout
//auth/profile

app.use("/auth", authRouter);
app.use("/home", homeRouter);
app.use("/article", articleRouter);
app.use("/users", userRouter);
app.use("/todos", todoRouter);

// error handling middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
