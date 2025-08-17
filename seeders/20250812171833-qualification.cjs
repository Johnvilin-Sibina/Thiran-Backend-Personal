'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Qualifications', [
      {
        name: 'B.E',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'M.E',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'B.Sc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BCA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MCA',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Qualifications', null, {});
     await queryInterface.sequelize.query(`ALTER SEQUENCE "Qualifications_id_seq" RESTART WITH 1`);
  }
};
