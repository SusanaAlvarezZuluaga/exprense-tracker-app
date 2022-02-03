const userRouter = require('express').Router();
const { userController } = require('../controllers');

userRouter.post('/', userController.registerNewUser);

module.exports = userRouter;
