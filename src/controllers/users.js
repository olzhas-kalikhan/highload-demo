const userService = require("@/db/services/user");
const { httpStatus } = require("./utils");
const { z } = require("zod");

const balanceHandlerParams = z.object({
  userId: z.preprocess((val) => Number(val), z.number().positive().int()),
  amount: z.preprocess((val) => Number(val), z.number().int()),
});

/** @type {import("@/type").HttpHandler} */
const balanceHandler = async (req, res) => {
  const paramsResult = balanceHandlerParams.safeParse(req.params);

  if (!paramsResult.success) {
    return res
      .status(httpStatus.BadRequest)
      .json({ error: paramsResult.error.format() });
  }
  const { userId, amount } = paramsResult.data;

  const result = await userService.incrementBalance({ userId, by: amount });
  if (!result) {
    return res.sendStatus(httpStatus.BadRequest);
  }
  console.log(result);
  res.status(httpStatus.OK).json(result);
};

const userController = {
  balanceHandler,
};

module.exports = userController;
