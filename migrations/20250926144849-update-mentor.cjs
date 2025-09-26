'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     // Allow firstName and lastName to be null
    await queryInterface.changeColumn("Mentors", "firstName", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn("Mentors", "lastName", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    //Add the new column isProfileComplete
    await queryInterface.addColumn("Mentors", "isProfileComplete", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });

  },

  async down (queryInterface, Sequelize) {
    // Change the columns firstName and lastName back to not null
    await queryInterface.changeColumn("Mentors", "firstName", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn("Mentors", "lastName", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    //Remove the newly added column
    await queryInterface.removeColumn("Mentors", "isProfileComplete");
  }
};
