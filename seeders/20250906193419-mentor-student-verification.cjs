'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MentorStudentVerifications', [
      { studentId: 1, mentorId: 1, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 6, mentorId: 1, status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 11, mentorId: 1, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 16, mentorId: 1, status: 'rejected', createdAt: new Date(), updatedAt: new Date() },

      { studentId: 2, mentorId: 2, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 7, mentorId: 2, status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 12, mentorId: 2, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 17, mentorId: 2, status: 'approved', createdAt: new Date(), updatedAt: new Date() },

      { studentId: 3, mentorId: 3, status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 8, mentorId: 3, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 13, mentorId: 3, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 18, mentorId: 3, status: 'rejected', createdAt: new Date(), updatedAt: new Date() },

      { studentId: 4, mentorId: 4, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 9, mentorId: 4, status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 14, mentorId: 4, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 19, mentorId: 4, status: 'approved', createdAt: new Date(), updatedAt: new Date() },

      { studentId: 5, mentorId: 5, status: 'pending', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 10, mentorId: 5, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 15, mentorId: 5, status: 'approved', createdAt: new Date(), updatedAt: new Date() },
      { studentId: 20, mentorId: 5, status: 'pending', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MentorStudentVerifications', null, {});
  }
};
