import { Router } from "express";
import v1Router from "./v1/routes";
import ErrorHandler from "./v1/middlewares/ErrorHandler";

const router = Router();

router.use("/v1", v1Router);
router.use(new ErrorHandler().handle);

export default router;
