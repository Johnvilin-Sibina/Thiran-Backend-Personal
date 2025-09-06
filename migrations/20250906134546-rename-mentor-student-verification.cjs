'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('mentorStudentVerifications','MentorStudentVerifications')
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.renameTable('MentorStudentVerifications','mentorStudentVerifications')
  }
};
