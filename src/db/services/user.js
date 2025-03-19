const { sequelize } = require("../models");
const User = sequelize.models.User;

const incrementBalance = async ({ userId, by = 1 }) => {
  const [affectedRows] = await User.increment("balance", {
    by,
    where: { id: userId },
  });
  const updatedUser = affectedRows[0][0];
  return updatedUser.balance;
};

const userService = { incrementBalance };

module.exports = userService;
