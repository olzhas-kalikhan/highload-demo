const express = require("express");
const userController = require("./controllers/users");
const router = express();
const morgan = require("morgan");

router.use(morgan("combined"));

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.patch("/users/:userId/balance/:amount", userController.balanceHandler);

module.exports = router;
