"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Students", "currentStatus");
    await queryInterface.removeColumn("Students", "currentYear");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Students_currentStatus";'
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Students_currentYear";'
    );
    await queryInterface.addColumn("Students", "yearOfGraduation", {
      type: Sequelize.DATEONLY,
    });
    await queryInterface.addColumn("Students", "isAvailableToWork", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize
      .query(`CREATE TYPE "enum_Students_currentStatus"
      AS ENUM ('Employed', 'NotEmployed', 'Internship');
      `);
    await queryInterface.sequelize
      .query(`CREATE TYPE "enum_Students_currentYear"
      AS ENUM ('Year1', 'Year2', 'Year3','FinalYear','PassedOut');
      `);
    await queryInterface.removeColumn("Students", "yearOfGraduation");
    await queryInterface.removeColumn("Students", "isAvailableToWork");
    await queryInterface.addColumn("Students", "currentStatus", {
      type: Sequelize.ENUM("Employed", "NotEmployed", "Internship"),
    });

    await queryInterface.addColumn("Students", "currentYear", {
      type: Sequelize.ENUM("Year1", "Year2", "Year3", "FinalYear", "PassedOut"),
    });
  },
};