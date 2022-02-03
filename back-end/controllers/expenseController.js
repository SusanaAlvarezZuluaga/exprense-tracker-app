const { expenseModel } = require('../models');

const addNewExpense = async (req, res, next) => {
  try {
    let results = await expenseModel.createExpense(req.body, req.user_id);
    if (!results) throw new Error('FAILURE');
    res.status(201).send('Expense created.');
  } catch (err) {
    next(err);
  }
};

const removeExpense = async (req, res, next) => {
  const id = req.params.id;
  try {
    const results = await expenseModel.deleteExpense(id);
    if (!results) throw new Error('FAILURE');
    res.status(200).send('Expense deleted.');
  } catch (err) {
    next(err);
  }
};

const updateExpense = async (req, res, next) => {
  const id = req.params.id;
  try {
    const results = await expenseModel.updateExpense(req.body, id);
    if (!results) throw new Error('FAILURE');
    res.status(200).send('Expense updated.');
  } catch (err) {
    next(err);
  }
};

const userExpenses = async (req, res, next) => {
  try {
    const results = await expenseModel.getAllExpenses(req.user_id);
    if (!results) throw new Error('NO_RECORD_FOUND');
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const userExpensesById = async (req, res, next) => {
  const expenseId = req.params.id;
  try {
    const results = await expenseModel.getExpenseById(expenseId);
    if (!results) throw new Error('NO_RECORD_FOUND');
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addNewExpense,
  removeExpense,
  updateExpense,
  userExpenses,
  userExpensesById,
};
