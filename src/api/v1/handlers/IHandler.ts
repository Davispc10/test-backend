import { Request, Response } from "express";

export default interface IHandler {
  handle(req: Request, res: Response): Promise<Response>;
}
