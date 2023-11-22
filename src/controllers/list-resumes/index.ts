import { PrismaResumeRepository } from "@/repositories/prisma/prisma-resume-repository";
import { ListResumesService } from "@/services";
import { ListResumesController } from "./list-resumes.controller";

const prismaResumeRepository = new PrismaResumeRepository();
const listResumesService = new ListResumesService(prismaResumeRepository);
const listResumesController = new ListResumesController(listResumesService);

export { listResumesController };
