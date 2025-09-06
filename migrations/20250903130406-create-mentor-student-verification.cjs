'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mentorStudentVerifications', {
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      mentorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        allowNull: true,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mentorStudentVerifications');
  }
};