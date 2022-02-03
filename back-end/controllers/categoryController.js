const { categoryModel } = require('../models');

const addNewCategory = async (req, res, next) => {
  try {
    let results = await categoryModel.createCategory(req.body, req.user_id);
    if (!results) throw new Error('FAILURE');
    res.status(201).send('Category created.');
  } catch (err) {
    next(err);
  }
};

const removeCategory = async (req, res, next) => {
  const id = req.params.id;
  try {
    const results = await categoryModel.deleteCategory(id);
    if (!results) throw new Error('FAILURE');
    res.status(200).send('Category deleted.');
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (req, res, next) => {
  const id = req.params.id;
  try {
    const results = await categoryModel.updateCategory(req.body, id);
    if (!results) throw new Error('FAILURE');
    res.status(200).send('Category updated');
  } catch (err) {
    next(err);
  }
};

const userCategories = async (req, res, next) => {
  try {
    const results = await categoryModel.getAllCategories(req.user_id);
    if (!results) throw new Error('NO_RECORD_FOUND');
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const userCategoryById = async (req, res, next) => {
  const categoryId = req.params.id;
  try {
    const results = await categoryModel.getCategoryById(categoryId);
    if (!results) throw new Error('NO_RECORD_FOUND');
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addNewCategory,
  removeCategory,
  updateCategory,
  userCategories,
  userCategoryById,
};
