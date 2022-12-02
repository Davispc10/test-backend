export interface AppErrorInput {
  message: string;
  statusCode: number;
}

class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(appErrorInput: AppErrorInput) {
    super();
    this.message = appErrorInput.message;
    this.statusCode = appErrorInput.statusCode;
  }

  public toJSON(): AppErrorInput {
    return {
      message: this.message,
      statusCode: this.statusCode,
    };
  }
}

export default AppError;
