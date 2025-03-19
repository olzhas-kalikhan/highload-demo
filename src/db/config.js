const env = require("../config/env");

const dbConfig = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  port: env.DB_PORT,
  dialect: "postgres",
};
// handled in with env files
module.exports = {
  development: dbConfig,
  test: dbConfig,
  production: dbConfig,
};
