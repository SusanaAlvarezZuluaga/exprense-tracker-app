const categoryRouter = require('express').Router();
const { categoryController } = require('../controllers');
const { authMiddleware } = require('../middleware');

categoryRouter.get(
  '/',
  authMiddleware.validateToken,
  categoryController.userCategories
);

categoryRouter.get(
  '/:id',
  authMiddleware.validateToken,
  categoryController.userCategoryById
);

categoryRouter.delete(
  '/:id',
  authMiddleware.validateToken,
  categoryController.removeCategory
);

categoryRouter.post(
  '/',
  authMiddleware.validateToken,
  categoryController.addNewCategory
);

categoryRouter.patch(
  '/:id',
  authMiddleware.validateToken,
  categoryController.updateCategory
);

module.exports = categoryRouter;
