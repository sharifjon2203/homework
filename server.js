import express from "express";
import { v4 } from "uuid";
import { User } from "./entities/index.js";
import { readUsers, writeUsers } from "./libs/index.js";
const app = express();

const PORT = 4000;

app.use(express.json());

//custom middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const end = Date.now();
	console.log(`Request took ${end - start}ms`);
});

//User Create
app.post("/users", async (req, res, next) => {
	try {
		const body = req.body;
		const user = new User(
			body.firstName,
			body.lastName,
			body.email,
			body.password,
			body.phoneNumber,
			body.address,
		);
		user.id = v4();
		const users = await readUsers();
		users.push(user);
		await writeUsers(users);

		res.json(user);
	} catch (error) {
		next(error);
	}
});

app.get("/users", async (req, res, next) => {
	try {
		const users = await readUsers();
		res.json(users);
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
