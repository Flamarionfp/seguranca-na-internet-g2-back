import { HttpStatus } from "@/core/http";
import { RegisterResumeService } from "@/services";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const bodySchema = z.object({
  full_name: z.string().regex(/^[a-zA-Z\s]+$/),
  email: z.string().email(),
  phone_number: z.string().min(10).max(11).regex(/^\d+$/).optional(),
  web_address: z.string().url().optional(),
  work_experience: z.string().min(50),
});

export type RegisterResumeDTO = z.infer<typeof bodySchema>;

export class RegisterResumeController {
  constructor(private readonly registerResumeService: RegisterResumeService) {}

  handle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = bodySchema.parse(req.body);
      await this.registerResumeService.execute(body);

      const message = "Currículo cadastrado com sucesso!";
      res.status(HttpStatus.CREATED).json({ message });
    } catch (error) {
      next(error);
    }
  };
}
