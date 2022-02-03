const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw Error;
  }
};

module.exports = {
  hashPassword,
};
