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
    return queryInterface.bulkInsert('Borrowers', [{
      full_name: 'Arinda Rahma',
      phone_number: "081234567890",
      email: "arinda@mail.com",
      money_needed: 10000000,
      selected_education: "SMP",
      loan_time: "12 bulan",
      speech_box: "smp kelas 7 di smp 1 jakarta",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Borrowers', null, {})
  }
};
