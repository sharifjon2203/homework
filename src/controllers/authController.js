import path from "node:path";
import { v4 } from "uuid";

// 1.

export const getRegisterController = (req, res, next) => {
	const homePageFilePath = path.join(
		import.meta.dirname,
		"..",
		"public",
		"register.html",
	);
	res.sendFile(homePageFilePath);
};

export const postRegisterController = async (req, res, next) => {
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
};

export const getLoginController = (req, res) => {
	const homePageFilePath = path.join(
		import.meta.dirname,
		"..",
		"public",
		"login.html",
	);
	res.sendFile(homePageFilePath);
};

export const postLoginController = (req, res, next) => {
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
		res.redirect("/auth/profile");
	} catch (error) {
		next(error);
	}
};

export const getProfileController = (req, res, next) => {
	try {
		const user = req.cookies.user;
		if (!user) {
			throw new Error("Unauthorized");
		}

		console.log({ user });

		const proflePageFilePath = path.join(
			import.meta.dirname,
			"..",
			"public",
			"profile.html",
		);

		res.sendFile(proflePageFilePath);
	} catch (error) {
		next(error);
	}
};

export const authController = {
	getRegisterController,
	postRegisterController,
	getLoginController,
	postLoginController,
	getProfileController,
};

export const userController = {
	update: (req, res, next) => {},
	delete: (req, res, next) => {},
	get: (req, res, next) => {},
	getAll: (req, res, next) => {},
	create: (req, res, next) => {},
};
