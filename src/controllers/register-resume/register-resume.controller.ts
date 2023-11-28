import { HttpStatus } from "@/core/http";
import { RegisterResumeService } from "@/services";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const fullNameValidator = (value: string): boolean => {
  try {
    const names = value.split(" ");
    const isValidLastName = names[1]?.trim().length > 0;

    return names.length >= 2 && isValidLastName;
  } catch (error) {
    return false;
  }
};

const bodySchema = z.object({
  full_name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/)
    .refine(fullNameValidator, "É necessário informar o nome completo"),
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
