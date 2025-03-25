import { Router } from "express";
import path from "node:path";
import { v4 } from "uuid";
import {
  getLoginController,
  getProfileController,
  getRegisterController,
  postLoginController,
  postRegisterController,
} from "../controllers/index.js";

const router = Router();

router.get("/register", getRegisterController);

router.post("/register", postRegisterController);

router.get("/login", getLoginController);

router.post("/login", postLoginController);

router.get("/profile", getProfileController);

export { router as authRouter };
