const { checkSchema, validationResult } = require('express-validator');
const catchAsync = require('../utils/catch-async');
const errorUtil = require('../utils/error');

const validator = (schema) => {
  return catchAsync(async (req, res, next) => {
    await checkSchema(schema).run(req);
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const [firstError] = validationErrors.array();
      const badReqError = errorUtil.createError(400, firstError.msg);
      return next(badReqError);
    }
    return next();
  });
};
module.exports = validator;
