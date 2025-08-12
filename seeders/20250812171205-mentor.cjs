'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mentors', [
      {
        firstName: 'Aarav',
        lastName: 'Sharma',
        userName: 'aarav.sharma',
        email: 'aarav.sharma@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Priya',
        lastName: 'Iyer',
        userName: 'priya.iyer',
        email: 'priya.iyer@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Karan',
        lastName: 'Verma',
        userName: 'karan.verma',
        email: 'karan.verma@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Neha',
        lastName: 'Reddy',
        userName: 'neha.reddy',
        email: 'neha.reddy@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Vikram',
        lastName: 'Menon',
        userName: 'vikram.menon',
        email: 'vikram.menon@example.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Mentors', null, {});
  }
};
