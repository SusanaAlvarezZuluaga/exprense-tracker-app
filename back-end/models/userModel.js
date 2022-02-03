const connection = require('../config/db-config');
const { userHelper } = require('../helpers');

const getUserByEmail = async (email) => {
  try {
    let [results] = await connection
      .promise()
      .query('SELECT id, email, hashedPassword FROM user WHERE email=?;', [
        email,
      ]);
    return results[0];
  } catch (err) {
    throw Error;
  }
};

const getUserById = async (id) => {
  try {
    let [results] = await connection
      .promise()
      .query('SELECT email, hashedPassword FROM user WHERE id=?;', [id]);
    return results[0];
  } catch (err) {
    throw Error;
  }
};

const createNewUser = async ({ email, password }) => {
  try {
    const hashedPassword = await userHelper.hashPassword(password);
    const [{ insertId }] = await connection
      .promise()
      .query('INSERT INTO user (email,hashedPassword) VALUES (?,?)', [
        email,
        hashedPassword,
      ]);
    return { id: insertId, email };
  } catch (err) {
    throw Error;
  }
};

module.exports = {
  getUserByEmail,
  getUserById,
  createNewUser,
};
