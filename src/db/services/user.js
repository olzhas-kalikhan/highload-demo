const { sequelize } = require("../models");
const User = sequelize.models.User;

const incrementBalance = async ({ userId, by = 1 }) => {
  const transaction = await User.sequelize.transaction();

  try {
    const user = await User.findOne({
      where: { id: userId },
      lock: transaction.LOCK.UPDATE,
      transaction,
    });

    if (!user || user.balance + by < 0) {
      await transaction.rollback();
      return false;
    }

    user.balance += by;
    await user.save({ transaction });

    await transaction.commit();
    return { balance: user.balance };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const userService = { incrementBalance };

module.exports = userService;
