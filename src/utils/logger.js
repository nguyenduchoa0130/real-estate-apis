require('dotenv').config();
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
  transports: [new winston.transports.Console({ format: winston.format.simple() })],
});

module.exports = logger;
