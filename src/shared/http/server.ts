import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import AppError from '@/shared/errors/appError';

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error.'
  })
});

app.listen(process.env.APP_PORT || 3001, () => {
  console.log(`Server started on port ${process.env.APP_PORT}`);
});
