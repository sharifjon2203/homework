import { Router } from "express";
import { productController } from "../controllers/index.js";

const router = Router();

//curd
router.get("/", productController.findAll);
router.get("/:id", productController.findOne);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

export { router as productRouter };
