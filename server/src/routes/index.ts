import { Router } from "express";
import AuthRouter from "./authRouter.js";
import VerifyEmailRouter from "./verifyEmailRoutes.js";

const router = Router();

router.use("/api/auth", AuthRouter);
router.use("/", VerifyEmailRouter);

export default router;
