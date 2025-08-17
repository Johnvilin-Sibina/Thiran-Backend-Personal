"use strict";
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
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: Sequelize.STRING(10),
        unique: true,
      },
      description: {
        type: Sequelize.TEXT,
      },
      qualificationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Qualifications",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      departmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Departments",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      collegeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Colleges",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Roles",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
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
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Students");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Students_currentYear";'
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Students_currentStatus";'
    );
  },
};
