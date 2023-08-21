const errorTypeMap = {
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZE',
  403: 'FORBIDDEN',
  404: 'NOT_FOUND',
};

const errorUtil = {
  createError: (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.type = errorTypeMap[statusCode];
    return error;
  },
};

module.exports = errorUtil;
