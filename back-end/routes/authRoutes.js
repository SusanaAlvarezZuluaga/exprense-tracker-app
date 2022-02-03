const authRouter = require('express').Router();
const { authController } = require('../controllers');
const { authMiddleware } = require('../middleware');

authRouter.post('/login', authController.loginController);

authRouter.get(
  '/logout',
  authMiddleware.validateToken,
  authController.logoutController
);

module.exports = authRouter;
