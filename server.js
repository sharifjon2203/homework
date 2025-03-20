import express from "express";
import { v4 } from "uuid";
import path from "node:path";
import cookieParser from "cookie-parser";
import { CustomError } from "./libs/index.js";

const app = express();

const PORT = 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static("public"));

app.use("/static", express.static("public"));

const userList = [
	{
		id: "1",
		name: "Xamidulloh",
		email: "xamidullo@gmail.com",
		password: "qwer12345",
	},
];

//custom middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const end = Date.now();
	console.log(`Request took ${end - start}ms`);
});

app.get("/", (req, res, next) => {
	try {
		const homePageFilePath = path.join(
			import.meta.dirname,
			"public",
			"index.html",
		);
		res.sendFile(homePageFilePath);
	} catch (error) {
		next(error);
	}
});

app.get("/register", (req, res, next) => {
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

		const user = userList.find((user) => user.email === body.email);

		if (user) {
			throw new Error("User already exists");
		}

		body.id = v4();
		userList.push(body);
		// '  `
		res.send(`

					<h1>Registration Successful</h1>
					<p>Thank you for registering with us, ${body.name}</p>

					<a href="/login">Login</a>

			`);
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

app.post("/login", (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			throw new CustomError("Please provide email and password", 400);
		}

		const user = userList.find((user) => user.email === email);

		if (!user) {
			throw new CustomError("User not found", 404);
		}

		if (user.password !== password) {
			throw new CustomError("Invalid password", 400);
		}

		//add cookie
		res.cookie("user", JSON.stringify(user));
		res.redirect("/profile");
	} catch (error) {
		next(error);
	}
});

app.get("/profile", (req, res, next) => {
	try {
		const user = req.cookies.user;
		if (!user) {
			throw new Error("Unauthorized");
		}

		console.log({ user });

		const proflePageFilePath = path.join(
			import.meta.dirname,
			"public",
			"profile.html",
		);

		res.sendFile(proflePageFilePath);
	} catch (error) {
		next(error);
	}
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
	const status = error.status || 500;
	const message = error.message || "Something went wrong";
	res.status(status).send(message);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
