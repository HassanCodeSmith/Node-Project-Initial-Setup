import { Router } from "express";
const router = Router();

import userRouter from "./user.routes.js";
import { trimObjects } from "../middlewares/trimObjects.middleware.js";
import { emailValidator } from "../middlewares/emailValidator.middleware.js";
router.use("/user", trimObjects, emailValidator, userRouter);
router.use("/user", emailValidator, userRouter);

export { router };
