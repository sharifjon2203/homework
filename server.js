import express from "express";
import { v4 } from "uuid";
import path from "node:path";

import { User } from "./entities/index.js";
import { readUsers, writeUsers } from "./libs/index.js";

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userList = [];

//custom middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const end = Date.now();
	console.log(`Request took ${end - start}ms`);
});

app.get("/", (req, res) => {
	const homePageFilePath = path.join(
		import.meta.dirname,
		"public",
		"index.html",
	);
	res.sendFile(homePageFilePath);
});

app.get("/register", (req, res) => {
	const homePageFilePath = path.join(
		import.meta.dirname,
		"public",
		"register.html",
	);
	res.sendFile(homePageFilePath);
});

app.post("/register", async (req, res, next) => {
	try {
		const body = req.body;
		if (!body.name || !body.email || !body.password) {
			throw new Error("Please provide all required fields");
		}
		body.id = v4();
		userList.push(body);

		res.send("User registered successfully");
	} catch (error) {
		next(error);
	}
});

app.get("/login", (req, res) => {
	const homePageFilePath = path.join(
		import.meta.dirname,
		"public",
		"login.html",
	);
	res.sendFile(homePageFilePath);
});

app.get("/users", (req, res, next) => {
	try {
		res.json(userList);
	} catch (error) {
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
