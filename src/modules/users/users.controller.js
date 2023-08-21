const _ = require('lodash');
const { QueryTypes } = require('sequelize');
const bcryptjs = require('bcryptjs');
const catchAsync = require('./../../utils/catch-async');
const dbUtil = require('./../../utils/db');
const { INSERT_NEW_USER } = require('./users.queries');

module.exports = {
  handleLogin: catchAsync(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const hash = await bcryptjs.hash(password, 10);
    } catch (error) {}
  }),
  handleRegister: catchAsync(async (req, res, next) => {
    try {
      // Extract info and hash password
      const { password, ...rest } = req.body;
      const hash = await bcryptjs.hash(password, 10);
      _.forIn(rest, (value, key) => {
        rest[key] = _.toLower(value);
      });

      // Insert new user into db
      const user = await dbUtil.runQuery(INSERT_NEW_USER, {
        replacements: {
          ...rest,
          password: hash,
        },
        type: QueryTypes.INSERT,
      });

      // Return values
      return res.status(200).json({
        status: '200 OK',
        results: user,
      });
    } catch (error) {
      return next(error);
    }
  }),
};
