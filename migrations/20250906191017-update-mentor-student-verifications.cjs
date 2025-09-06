"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove the existing string status column
    await queryInterface.removeColumn("MentorStudentVerifications", "status");

    // Add status column as ENUM type
    await queryInterface.addColumn("MentorStudentVerifications", "status", {
      type: Sequelize.ENUM("approved", "pending", "rejected"),
      allowNull: false,
      defaultValue: "pending",
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the ENUM status column
    await queryInterface.removeColumn("MentorStudentVerifications", "status");
    // Clean up ENUM type
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_MentorStudentVerifications_status"'
    );
    // Add back the string status column
    await queryInterface.addColumn("MentorStudentVerifications", "status", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "pending",
    });
  },
};
