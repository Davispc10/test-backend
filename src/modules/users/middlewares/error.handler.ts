import { NextFunction, Request, Response } from 'express';
import AppError from '../../../shared/errors/appError';


export default function errorHandler(error: Error, request: Request, response: Response, next: NextFunction)  {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
      statusCode: error.statusCode
    });
  }

  return response.status(500).json({
    message: error.message,
    statusCode: 500
  });
}
