import HttpException from 'http-status-codes';

export class Exception{
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = HttpException.INTERNAL_SERVER_ERROR){
      this.message = message;
      this.statusCode = statusCode;
  }
}
