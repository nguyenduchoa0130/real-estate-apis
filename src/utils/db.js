const logger = require('./logger');
const sequelize = require('../database/models').sequelize;

const dbUtil = {
  connect: async () => {
    try {
      await sequelize.authenticate();
      logger.info('Connect database successfully');
    } catch (error) {
      throw error;
    }
  },

  /**
   *
   * @param {string} query Sql query
   * @param {import('sequelize').QueryOptions | any} options
   * @returns Promise<any>
   */
  runQuery: async (query, options = {}) => {
    try {
      const [results] = await sequelize.query(query, options);
      return results;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = dbUtil;
