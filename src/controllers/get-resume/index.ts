import { PrismaResumeRepository } from "@/repositories/prisma/prisma-resume-repository";
import { GetResumeService } from "@/services";
import { GetResumeController } from "./get-resume.controller";

const prismaResumeRepository = new PrismaResumeRepository();
const getResumeService = new GetResumeService(prismaResumeRepository);
const getResumeController = new GetResumeController(getResumeService);

export { getResumeController };
