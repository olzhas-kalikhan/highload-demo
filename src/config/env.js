const { z } = require("zod");
require("dotenv").config({ path: process.env.ENV_FILE });

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.preprocess((val) => Number(val), z.number().positive().int()),
  DB_HOST: z.string(),
  DB_PORT: z.preprocess((val) => Number(val), z.number().positive().int()),
  DB_DATABASE: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables:", parsedEnv.error.format());
  process.exit(1);
}
const env = parsedEnv.data;

module.exports = env;
