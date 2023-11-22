import { prismaClient } from "@/database/prisma";
import { ResumeRepository } from "../resume-repository";
import { RegisterResumeDTO } from "@/controllers/register-resume/register-resume.controller";

export class PrismaResumeRepository implements ResumeRepository {
  get = async (id: string) => {
    const resume = await prismaClient.resume.findUnique({
      where: {
        id,
      },
      include: {
        person: true,
      },
    });

    return resume;
  };

  list = async () => {
    const resumes = await prismaClient.resume.findMany({
      include: { person: true },
    });

    return resumes;
  };

  register = async ({
    work_experience,
    email,
    full_name,
    phone_number,
    web_address,
  }: RegisterResumeDTO) => {
    await prismaClient.resume.create({
      data: {
        description: work_experience,
        person: {
          connectOrCreate: {
            create: {
              email,
              name: full_name,
              phone_number,
              web_address,
            },
            where: {
              email,
            },
          },
        },
      },
    });
  };
}
