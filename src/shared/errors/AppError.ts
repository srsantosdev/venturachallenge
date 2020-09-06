export default class AppError {
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }

  public readonly statusCode: number;

  public readonly message: string;
}
