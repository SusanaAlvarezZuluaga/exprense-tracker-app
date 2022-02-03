require('dotenv').config();
const jwt = require('jsonwebtoken');

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const validateToken = async (req, res, next) => {
  let match;
  const { user_token } = req.cookies;
  try {
    if (!user_token) {
      res.clearCookie('loggedIn');
      throw new Error('NOT_AUTHENTICATED');
    } else {
      match = jwt.verify(user_token, PRIVATE_KEY);
      if (!match) {
        throw new Error('INVALID_CREDENTIALS');
      } else {
        req.user_id = match.user_id;
        req.admin = match.admin;
        next();
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  validateToken,
};
