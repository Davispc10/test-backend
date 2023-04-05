import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import api from "./api";
import AppError from "./api/v1/errors/AppError";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", api);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
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
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
