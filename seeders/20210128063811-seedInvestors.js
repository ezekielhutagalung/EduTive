'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Investors', [
      {
        full_name: 'John Doe',
        phone_number: 88567,
        email: 'john@mail.com',
        password: 'kapalkaram',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'John Torr',
        phone_number: 85367,
        email: 'tor@mail.com',
        password: 'karam',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Investors', null, {})
  }
};
