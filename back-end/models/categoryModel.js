const connection = require('../config/db-config');

const getAllCategories = async (user_id) => {
  let results;
  try {
    results = await connection
      .promise()
      .query('SELECT * FROM category WHERE user_id=?', [user_id]);
    return results[0];
  } catch (err) {
    throw Error;
  }
};

const getCategoryById = async (id) => {
  try {
    let [results] = await connection
      .promise()
      .query('SELECT * FROM category WHERE id=?;', [id]);
    return results[0];
  } catch (err) {
    throw Error;
  }
};

const createCategory = async (categoryInfo, user_id) => {
  try {
    const [{ insertId }] = await connection
      .promise()
      .query('INSERT INTO category SET ?', {
        ...categoryInfo,
        user_id,
      });

    return { id: insertId, ...categoryInfo, user_id };
  } catch (err) {
    throw Error;
  }
};

const updateCategory = async (propsToUpdate, id) => {
  try {
    let [results] = await connection
      .promise()
      .query('UPDATE category SET ? WHERE id=?', [{ ...propsToUpdate }, id]);
    return results.affectedRows;
  } catch (err) {
    throw Error;
  }
};

const deleteCategory = async (id) => {
  try {
    const [results] = await connection
      .promise()
      .query('DELETE FROM category WHERE id=?', [id]);
    return results.affectedRows;
  } catch (err) {
    throw Error;
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  getCategoryById,
  getAllCategories,
};
