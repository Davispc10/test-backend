import { Request, Response } from "express";
import { UploadFileServiceImpl } from "../services/impl/UploadFileServiceImpl";

export class UploadFileController {
  constructor(private uploadService: UploadFileServiceImpl) {}

  async upload(request: Request, response: Response): Promise<Response> {
    const file = request.file;

    if (!file) {
      return response.status(400).json({ error: "no file uploaded" });
    }

    try {
      await this.uploadService.save(file.path);
      return response.status(200).json({ message: "file successfully uploaded" });
    } catch (error) {
      return response.status(500).json({ error: "someting wrong" });
    }
  }
}
