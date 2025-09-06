'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add foreign key constraint for studentId
    await queryInterface.addConstraint('MentorStudentVerifications', {
      fields: ['studentId'],
      type: 'foreign key',
      name: 'fk_MentorStudentVerifications_studentId',
      references: {
        table: 'Students',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    });
    // Add foreign key constraint for mentorId
    await queryInterface.addConstraint('MentorStudentVerifications', {
      fields: ['mentorId'],
      type: 'foreign key',
      name: 'fk_MentorStudentVerifications_mentorId',
      references: {
        table: 'Mentors',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    });
  },

  async down (queryInterface, Sequelize) {
     // Remove foreign key constraint for studentId
    await queryInterface.removeConstraint(
      'MentorStudentVerifications', 
      'fk_MentorStudentVerifications_studentId'
    );

    // Remove foreign key constraint for mentorId
    await queryInterface.removeConstraint(
      'MentorStudentVerifications', 
      'fk_MentorStudentVerifications_mentorId'
    );
  }
};