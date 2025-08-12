'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
         allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
         allowNull: false
      },
      userName: {
        type: Sequelize.STRING,
         allowNull: false
      },
      email: {
        type: Sequelize.STRING,
         allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING(10),
      },
      description: {
        type: Sequelize.TEXT,
      },
      qualificationId: {
        type: Sequelize.BIGINT,
      },
      departmentId: {
        type: Sequelize.BIGINT,
      },
      collegeId: {
        type: Sequelize.BIGINT,
      },
      roleId: {
        type: Sequelize.BIGINT,
      },
      currentYear: {
        type: Sequelize.ENUM(
          "Year1",
          "Year2",
          "Year3",
          "FinalYear",
          "PassedOut"
        ),
      },
      currentStatus: {
        type: Sequelize.ENUM("Employed", "NotEmployed", "Intership"),
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Students");
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Students_currentYear";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Students_currentStatus";');
  },
};
