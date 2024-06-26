class AppError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string, stack?: string | undefined) {
    super(message);
    this.statusCode = statusCode;
    stack
      ? (this.stack = stack)
      : Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
