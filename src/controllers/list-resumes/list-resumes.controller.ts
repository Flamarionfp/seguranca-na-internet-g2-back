import { HttpStatus } from "@/core/http";
import { ListResumesService } from "@/services";
import { NextFunction, Request, Response } from "express";

export class ListResumesController {
  constructor(private readonly listResumesService: ListResumesService) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resumes = await this.listResumesService.execute();

      res.status(HttpStatus.OK).json(resumes);
    } catch (error) {
      next(error);
    }
  };
}
