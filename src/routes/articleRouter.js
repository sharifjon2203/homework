import { Router } from "express";
import { articleController } from "../controllers/index.js";

const router = Router();

//article/2

router.get("/:id", articleController.findOne);

export { router as articleRouter };
