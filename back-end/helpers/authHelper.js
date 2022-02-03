const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const verifyPassword = async (password, hashedPassword) => {
  let matchFound;
  try {
    matchFound = await bcrypt.compare(password, hashedPassword);
    if (!matchFound) return false;
    else return matchFound;
  } catch (err) {
    console.log(err);
    throw Error;
  }
};

const calculateToken = ({ user_id }) => {
  return jwt.sign({ user_id: user_id }, PRIVATE_KEY);
};

module.exports = {
  verifyPassword,
  calculateToken,
};
