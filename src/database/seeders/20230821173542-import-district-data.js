'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Districts', [
      {
        name: 'District 1',
      },
      {
        name: 'District 2',
      },
      {
        name: 'District 3',
      },
      {
        name: 'District 4',
      },
      {
        name: 'District 5',
      },
      {
        name: 'District 6',
      },
      {
        name: 'District 7',
      },
      {
        name: 'District 8',
      },
      {
        name: 'District 9',
      },
      {
        name: 'District 10',
      },
      {
        name: 'District 11',
      },
      {
        name: 'District 12',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Districts', null, {});
  },
};
