import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/appError';
import authConfig from '../../config/auth';
import { verify } from 'jsonwebtoken';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError({
      message: 'Empty header.',
      statusCode: 401,
    });
  }

  const [, access_token] = authHeader.split(' ');

  try {
    const decodeToken = verify(access_token, authConfig.jwt.secret);

    return next();
  } catch {
    throw new AppError({
      message: 'Invalid token.',
      statusCode: 401,
    });
  }
}
