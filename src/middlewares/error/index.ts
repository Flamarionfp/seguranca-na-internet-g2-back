import { HttpException, HttpStatus } from "@/core/http";
import { formatZodErrorMessage, verifyZodError } from "@/core/zod";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

class ErrorHandlerMiddleware {
  handle(error: Error, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
      return next(error);
    }

    let statusCode: number;
    let message: string;

    const isZodError = verifyZodError(error);

    if (isZodError) {
      statusCode = HttpStatus.BAD_REQUEST;
      message = formatZodErrorMessage(error as ZodError);
    } else {
      const parsedError = HttpException.parse(error);
      statusCode = parsedError.status;
      message = parsedError.message;
    }

    res.status(statusCode).json({ success: false, message });
  }
}

export default new ErrorHandlerMiddleware();
