require("module-alias/register");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@", __dirname);

const express = require("express");
const { connectDB } = require("./db/connect");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
