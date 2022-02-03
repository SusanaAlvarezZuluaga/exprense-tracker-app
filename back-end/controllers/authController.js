const { userModel } = require('../models');
const { authHelper } = require('../helpers');

const loginController = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    if (!email || !password) throw new Error('INVALID_CREDENTIALS');
    let user = await userModel.getUserByEmail(email);
    if (!user) throw new Error('NO_USER');
    let match = await authHelper.verifyPassword(password, user.hashedPassword);
    if (!match) throw new Error('INVALID_CREDENTIALS');
    const token = authHelper.calculateToken({
      user_id: user.id,
    });
    res
      .status(200)
      .cookie('user_token', token)
      .cookie('loggedIn', true)
      .send('Welcome back!');
  } catch (err) {
    next(err);
  }
};

const logoutController = (req, res) => {
  const { user_token, loggedIn } = req.cookies;
  if (user_token && loggedIn) {
    res
      .clearCookie('user_token')
      .clearCookie('loggedIn')
      .status(200)
      .json({ message: 'Successfully logged out' });
  } else {
    res.status(401).json({ message: 'No active session' });
  }
};

module.exports = {
  loginController,
  logoutController,
};
