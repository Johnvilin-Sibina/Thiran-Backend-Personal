'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Drop the default PK (Postgres auto-generated name)
    await queryInterface.removeConstraint(
      'MentorStudentVerifications',
      'mentorStudentVerifications_pkey'
    );
    // Add new PK with custom name
    await queryInterface.addConstraint('MentorStudentVerifications', {
      fields: ['studentId', 'mentorId'],
      type: 'primary key',
      name: 'PK_MentorStudentVerifications'
    });
  },

  async down (queryInterface, Sequelize) {
     // Remove custom PK
    await queryInterface.removeConstraint(
      'MentorStudentVerifications',
      'PK_MentorStudentVerifications'
    );

    // Restore the default PK name
    await queryInterface.addConstraint('MentorStudentVerifications', {
      fields: ['studentId', 'mentorId'],
      type: 'primary key',
      name: 'mentorStudentVerifications_pkey'
    });
  }
};