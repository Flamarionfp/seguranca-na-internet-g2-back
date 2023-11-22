import { RegisterResumeDTO } from "@/controllers/register-resume/register-resume.controller";
import { Resume } from "@prisma/client";

export interface ResumeRepository {
  get: (id: string) => Promise<Resume | null>;
  list: () => Promise<Resume[]>;
  register: (data: RegisterResumeDTO) => Promise<void>;
}
