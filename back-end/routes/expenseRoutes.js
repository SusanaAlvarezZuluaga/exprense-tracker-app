const expenseRouter = require('express').Router();
const { expenseController } = require('../controllers');
const { authMiddleware } = require('../middleware');

expenseRouter.get(
  '/',
  authMiddleware.validateToken,
  expenseController.userExpenses
);

expenseRouter.get(
  '/:id',
  authMiddleware.validateToken,
  expenseController.userExpensesById
);

expenseRouter.delete(
  '/:id',
  authMiddleware.validateToken,
  expenseController.removeExpense
);

expenseRouter.post(
  '/',
  authMiddleware.validateToken,
  expenseController.addNewExpense
);

expenseRouter.patch(
  '/:id',
  authMiddleware.validateToken,
  expenseController.updateExpense
);

module.exports = expenseRouter;
