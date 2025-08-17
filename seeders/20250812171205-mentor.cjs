'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mentors', [
      {
        firstName: 'Aarav',
        lastName: 'Sharma',
        username: 'aarav.sharma',
        email: 'aarav.sharma@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Priya',
        lastName: 'Iyer',
        username: 'priya.iyer',
        email: 'priya.iyer@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Karan',
        lastName: 'Verma',
        username: 'karan.verma',
        email: 'karan.verma@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Neha',
        lastName: 'Reddy',
        username: 'neha.reddy',
        email: 'neha.reddy@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Vikram',
        lastName: 'Menon',
        username: 'vikram.menon',
        email: 'vikram.menon@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Mentors', null, {});
      await queryInterface.sequelize.query(`ALTER SEQUENCE "Mentors_id_seq" RESTART WITH 1`);
  }
};
