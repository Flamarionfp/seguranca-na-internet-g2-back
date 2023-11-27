import { HttpException, HttpStatus } from "@/core/http";
import env from "@env";
import { NextFunction, Request, Response } from "express";

class VerifyApiKeyMiddleware {
  handle = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers["authorization"];

    if (apiKey !== env.API_KEY) {
      return next(
        HttpException.create(HttpStatus.UNAUTHORIZED, "Unauthorized")
      );
    }

    return next();
  };
}

export default new VerifyApiKeyMiddleware();
