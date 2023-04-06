import AppError from "../errors/AppError";
import { Request, Response, NextFunction } from "express";

class ErrorHandler {
  async handle(
    err: Error,
    request: Request,
    response: Response,
    _: NextFunction
  ): Promise<Response> {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}

export default ErrorHandler;
