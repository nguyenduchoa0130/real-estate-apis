'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Wards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      districtId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Districts',
          key: 'id',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('GETDATE'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('GETDATE'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Wards');
  },
};
