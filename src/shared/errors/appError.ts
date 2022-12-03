export interface AppErrorInput {
  message: string;
  statusCode: number;
}


export default class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(appErrorInput: AppErrorInput) {
    super(appErrorInput.message);
    this.message = appErrorInput.message;
    this.statusCode = appErrorInput.statusCode;
  }
}
