import { Router } from "express";
import { homeController } from "../controllers/index.js";

const router = Router();

//curd
router.get("/", homeController.findAll);

export { router as homeRouter };
