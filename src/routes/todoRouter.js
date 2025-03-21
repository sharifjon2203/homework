import { Router } from "express";
import { todoController } from "../controllers/index.js";
const router = Router();

router.get("/", todoController.findAll);

export { router as todoRouter };
