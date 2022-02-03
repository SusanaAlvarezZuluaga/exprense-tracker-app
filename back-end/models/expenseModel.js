const connection = require('../config/db-config');

const getAllExpenses = async (user_id, admin = false) => {
  let results;
  let query =
    'SELECT e.id,payment_method,amount,type,date,e.name,description,c.name as category_name,c.icon as category_icon FROM expense As e JOIN category AS c ON e.category_id=c.id WHERE e.user_id=?';
  try {
    results = await connection.promise().query(query, [user_id]);
    return results[0];
  } catch (err) {
    throw Error;
  }
};

const getExpenseById = async (id) => {
  let query =
    'SELECT e.id,payment_method,type,amount,date,e.name,description,c.name as category_name,c.icon as category_icon FROM expense As e JOIN category AS c ON e.category_id=c.id WHERE e.id=?';
  try {
    let [results] = await connection.promise().query(query, [id]);
    return results[0];
  } catch (err) {
    throw Error;
  }
};

const createExpense = async (expenseInfo, user_id) => {
  console.log({ ...expenseInfo, user_id });
  try {
    const [{ insertId }] = await connection
      .promise()
      .query('INSERT INTO expense SET ?', {
        ...expenseInfo,
        user_id,
      });

    return { id: insertId, ...expenseInfo, user_id };
  } catch (err) {
    throw Error;
  }
};

const updateExpense = async (propsToUpdate, id) => {
  try {
    let [results] = await connection
      .promise()
      .query('UPDATE expense SET ? WHERE id=?', [{ ...propsToUpdate }, id]);
    return results.affectedRows;
  } catch (err) {
    throw Error;
  }
};

const deleteExpense = async (id) => {
  try {
    const [results] = await connection
      .promise()
      .query('DELETE FROM expense WHERE id=?', [id]);
    return results.affectedRows;
  } catch (err) {
    throw Error;
  }
};

module.exports = {
  createExpense,
  deleteExpense,
  updateExpense,
  getExpenseById,
  getAllExpenses,
};
