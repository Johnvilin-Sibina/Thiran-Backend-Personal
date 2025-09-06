"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "Roles",
      { responsibility: "admin", updatedAt: new Date() },
      { responsibility: "Admin" }
    );
    await queryInterface.bulkUpdate(
      "Roles",
      { responsibility: "student", updatedAt: new Date() },
      { responsibility: "Student" }
    );
    await queryInterface.bulkUpdate(
      "Roles",
      { responsibility: "mentor", updatedAt: new Date() },
      { responsibility: "Mentor" }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "Roles",
      { responsibility: "Admin", updatedAt: new Date() },
      { responsibility: "admin" }
    );
    await queryInterface.bulkUpdate(
      "Roles",
      { responsibility: "Student", updatedAt: new Date() },
      { responsibility: "student" }
    );
    await queryInterface.bulkUpdate(
      "Roles",
      { responsibility: "Mentor", updatedAt: new Date() },
      { responsibility: "mentor" }
    );
  },
};