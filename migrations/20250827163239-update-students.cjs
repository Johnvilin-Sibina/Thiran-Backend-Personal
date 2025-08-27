"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Students", "collegeId");
    await queryInterface.removeColumn("Students", "departmentId");
    await queryInterface.removeColumn("Students", "qualificationId");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("Students", "collegeId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Students", "departmentId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Students", "qualificationId", {
      type: Sequelize.INTEGER,
    });
  },
};