import { RegisterResumeDTO } from "@/controllers/register-resume/register-resume.controller";
import { ResumeRepository } from "@/repositories";

export class RegisterResumeService {
  constructor(private readonly resumeRepository: ResumeRepository) {}

  execute = async (data: RegisterResumeDTO) => {
    await this.resumeRepository.register(data);
  };
}
