'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn('Users', 'salary', {
        type: Sequelize.FLOAT,
        allowNull: true,
      }),
      queryInterface.addColumn('Users', 'sex', {
        type: Sequelize.STRING,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
