export interface AppErrorInput {
  message: string,
  statusCode: number,
}

class AppError extends Error {
  public readonly statusCode: number;

  constructor(appErrorInput: AppErrorInput) {
    super();
    this.message = appErrorInput.message;
    this.statusCode = appErrorInput.statusCode;
  }
}

export default AppError;
