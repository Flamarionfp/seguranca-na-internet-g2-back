import { HttpException, HttpStatus } from "@/core/http";
import { ResumeRepository } from "@/repositories";

export class GetResumeService {
  constructor(private readonly resumeRepository: ResumeRepository) {}

  execute = async (id: string) => {
    const resume = await this.resumeRepository.get(id);

    if (!resume) {
      throw new HttpException(HttpStatus.NOT_FOUND, "Currículo não encontrado");
    }

    return resume;
  };
}
