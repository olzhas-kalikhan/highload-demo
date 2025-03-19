require("module-alias/register");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@", __dirname);

const { connectDB } = require("./db/connect");
const router = require("./router");
const env = require("./config/env");
const userService = require("./db/services/user");

connectDB()
  .then(() => {
    userService.createUserIfNotExists();
  })
  .then(() => {
    router.listen(env.PORT, () => {
      console.log(`Example app listening on port ${env.PORT}`);
    });
  });
