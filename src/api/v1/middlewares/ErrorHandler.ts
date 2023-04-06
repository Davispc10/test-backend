import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';

class ErrorHandler {
  async handle(err: Error, request: Request, response: Response, _: NextFunction): Promise<Response> {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
}

export default ErrorHandler;
