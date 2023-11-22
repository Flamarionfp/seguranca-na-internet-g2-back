import { RegisterResumeService } from "@/services";
import { PrismaResumeRepository } from "@/repositories/prisma/prisma-resume-repository";
import { RegisterResumeController } from "./register-resume.controller";

const prismaResumeRepository = new PrismaResumeRepository();
const registerResumeService = new RegisterResumeService(prismaResumeRepository);
const registerResumeController = new RegisterResumeController(
  registerResumeService
);

export { registerResumeController };
