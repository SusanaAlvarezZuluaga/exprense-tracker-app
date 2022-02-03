const bcrypt = require('bcrypt');
const connection = require('../config/db-config');

const blockUser = async (id) => {
  try {
    let [results] = await connection.query(
      'UPDATE users SET status="Blocked" WHERE id=?',
      [id]
    );
    return results.affectedRows;
  } catch (err) {
    throw Error;
  }
};

const reactivateUser = async (status, id) => {
  try {
    let [results] = await connection.query(
      'UPDATE users SET status=? WHERE id=?',
      [status, id]
    );
    return results.affectedRows;
  } catch (err) {
    throw Error;
  }
};

module.exports = {
  blockUser,
  reactivateUser,
};
