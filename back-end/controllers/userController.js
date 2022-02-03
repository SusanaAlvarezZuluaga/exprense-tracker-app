const { userModel } = require('../models');
const { userValidation } = require('../validation');

const registerNewUser = async (req, res, next) => {
  try {
    const validationErrors = userValidation.validateUser(req.body);
    if (validationErrors) {
      req.validationErrors = validationErrors;
      throw new Error('INVALID_DATA');
    }
    const user = await userModel.getUserByEmail(req.body.email);
    if (user) throw new Error('EXISTING_EMAIL');
    await userModel.createNewUser(req.body);
    res.status(201).send('User was registered successfully!');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerNewUser,
};
