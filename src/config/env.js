const { z } = require("zod");

const getEnvPath = (env) => {
  switch (env) {
    case "production":
      return ".env.prod";

    default:
      return ".env.dev";
  }
};
require("dotenv").config({ path: getEnvPath(process.env.NODE_ENV) });

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.preprocess((val) => Number(val), z.number().positive().int()),
  DB_HOST: z.string().nonempty(),
  DB_PORT: z.preprocess((val) => Number(val), z.number().positive().int()),
  DB_DATABASE: z.string().nonempty(),
  DB_USERNAME: z.string().nonempty(),
  DB_PASSWORD: z.string().nonempty(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables:", parsedEnv.error.format());
  process.exit(1);
}
const env = parsedEnv.data;

module.exports = env;
