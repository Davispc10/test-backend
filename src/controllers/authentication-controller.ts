import authenticationService, { SignInParams } from "@/service/authentication-service";
import { AuthenticatedRequest } from "@/middlewares";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await authenticationService.signIn({ email, password });
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    if (error.name === "UnauthorizedError" || error.name === "InvalidCredentialsError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function logOut(req: AuthenticatedRequest, res: Response) {
  const { token } = req;
  
  try {
    await authenticationService.deleteSession(token);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
