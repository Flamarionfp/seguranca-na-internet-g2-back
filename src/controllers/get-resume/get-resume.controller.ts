import { HttpStatus } from "@/core/http";
import { GetResumeService } from "@/services";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const paramsSchema = z.object({
  id: z.string().uuid(),
});

export class GetResumeController {
  constructor(private readonly getResumeService: GetResumeService) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = paramsSchema.parse(req.params);
      const resume = await this.getResumeService.execute(id);

      res.status(HttpStatus.OK).json(resume);
    } catch (error) {
      next(error);
    }
  };
}
