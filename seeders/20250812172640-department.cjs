'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departments', [
      {
        name: 'Computer Science Engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Information Technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electronics and Communication Engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mechanical Engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Civil Engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electrical Engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Software Engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Data Science',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Artificial Intelligence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cybersecurity',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departments', null, {});
  }
};
