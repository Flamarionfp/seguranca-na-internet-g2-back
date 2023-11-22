import { ResumeRepository } from "@/repositories";

export class ListResumesService {
  constructor(private readonly resumeRepository: ResumeRepository) {}

  async execute() {
    const resumes = await this.resumeRepository.list();

    return resumes;
  }
}
