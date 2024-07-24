import { Router } from "express";
const router = Router();

import userRouter from "./user.routes.js";
import { trimObjects } from "../middlewares/trimObjects.middleware.js";
router.use("/user", trimObjects, userRouter);

export { router };
