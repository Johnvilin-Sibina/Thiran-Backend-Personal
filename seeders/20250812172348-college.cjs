'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Colleges', [
      {
        name: 'St. Joseph’s Institute of Technology',
        city: 'Chennai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PSG College of Technology',
        city: 'Coimbatore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anna University',
        city: 'Chennai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kumaraguru College of Technology',
        city: 'Coimbatore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SRM Institute of Science and Technology',
        city: 'Kattankulathur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'VIT University',
        city: 'Vellore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Madras Institute of Technology',
        city: 'Chennai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thiagarajar College of Engineering',
        city: 'Madurai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bannari Amman Institute of Technology',
        city: 'Erode',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Government College of Technology',
        city: 'Coimbatore',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colleges', null, {});
     await queryInterface.sequelize.query(`ALTER SEQUENCE "Colleges_id_seq" RESTART WITH 1`);
  }
};
