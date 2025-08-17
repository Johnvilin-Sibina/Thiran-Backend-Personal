'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Roles', [
      {
        responsibility: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        responsibility: 'Student',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        responsibility: 'Mentor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {}); 
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Roles_id_seq" RESTART WITH 1`);
  }
};
