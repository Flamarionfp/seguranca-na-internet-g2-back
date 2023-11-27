import "dotenv/config";

import { z } from "zod";

const validEnvs = z.enum(["development", "production"]);

const envSchema = z.object({
  NODE_ENV: validEnvs.default("development"),
  API_KEY: z.string().trim(),
  PORT: z.coerce.number().default(4000),
  DATABASE_PASSWORD: z.string().trim(),
  DATABASE_URL: z.string().trim(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  const errorMessage = "Invalid environment variables";

  console.error(errorMessage, _env.error.format());

  throw new Error(errorMessage);
}

const env = _env.data;
export const isProduction = env.NODE_ENV === "production";

export default env;
