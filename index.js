require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');

const logger = require('./src/utils/logger');
const dbUtil = require('./src/utils/db');
const errorUtil = require('./src/utils/error');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./src/modules/users'));
app.use('/api/addresses', require('./src/modules/addresses'));
app.use('*', (req, res, next) => {
  const error = errorUtil.createError(404, `Not found endpoint: ${req.path}`);
  return next(error);
});
// Handling error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode ? parseInt(err.statusCode) : 500;
  const message = err.message || 'Internal server error';
  console.log('Tracing: ', err);
  logger.error(`Error detail: ${err}`);
  return res.status(statusCode).json({
    error: err.type || 'INTERNAL_ERROR_SERVER',
    message,
  });
});

const server = http.createServer(app);
dbUtil.connect().then(() => {
  server.listen(PORT, () => {
    logger.info(`Server is running at port ${PORT}`);
  });
});
