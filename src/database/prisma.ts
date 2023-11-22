import { isProduction } from "@env";
import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  log: isProduction ? [] : ["query"],
});
