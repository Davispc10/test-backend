import { createUser } from "@/controllers/user-controller";
import { Router } from "express";
import { authenticateToken } from "@/middlewares";

const userRouter = Router();

userRouter
  .post("/", createUser)
  .all("/*", authenticateToken)
;

export { userRouter };
