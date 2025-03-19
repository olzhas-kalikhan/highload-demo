const userService = require("@/db/services/user");
const { httpStatus } = require("./utils");
const { z } = require("zod");

const balanceHandlerParams = z.object({
  userId: z.preprocess((val) => Number(val), z.number().positive().int()),
  amount: z.preprocess((val) => Number(val), z.number().int()),
});

/** @type {import("@/type").HttpHandler} */
const balanceHandler = async (req, res) => {
  const result = balanceHandlerParams.safeParse(req.params);

  if (!result.success) {
    return res
      .status(httpStatus.BadRequest)
      .json({ error: result.error.format() });
  }
  const { userId, amount } = result.data;

  const newBalance = await userService.incrementBalance({ userId, by: amount });
  res.status(httpStatus.OK).json({ newBalance });
};

const userController = {
  balanceHandler,
};

module.exports = userController;
