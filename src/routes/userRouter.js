import { Router } from "express";
import { userList } from "../db/index.js";

const router = Router();

router.get("/users", (req, res, next) => {
	try {
		res.json(userList);
	} catch (error) {
		next(error);
	}
});

export { router as userRouter };
