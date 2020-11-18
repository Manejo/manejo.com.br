'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('trilhas', [
      {
        nome: 'chapeu do sol 1',
        coordenadas: '-8.0150676;-34.9465582',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'chapeu do sol 2',
        coordenadas: '-8.007837;-34.945868',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'chapeu do sol 3',
        coordenadas: '-8.007073;-34.951170',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('trilhas', null, {});
  }
};
