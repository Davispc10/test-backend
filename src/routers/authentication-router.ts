import { Router } from "express";
import { singInPost, logOut } from "@/controllers/authentication-controller";
import { authenticateToken } from "@/middlewares";

const authenticationRouter = Router();

authenticationRouter
  .post("/sign-in", singInPost)
  .all("/*", authenticateToken)
  .delete("/log-out", logOut)
;

export { authenticationRouter };

