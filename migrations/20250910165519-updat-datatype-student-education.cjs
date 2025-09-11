'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   // Drop the old integer columns
    await queryInterface.removeColumn('StudentEducations', 'startingYear');
    await queryInterface.removeColumn('StudentEducations', 'endingYear');

    // Recreate them as DATEONLY
    await queryInterface.addColumn('StudentEducations', 'startingYear', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.addColumn('StudentEducations', 'endingYear', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    // Drop DATEONLY columns
    await queryInterface.removeColumn('StudentEducations', 'startingYear');
    await queryInterface.removeColumn('StudentEducations', 'endingYear');

    // Recreate them as INTEGER
    await queryInterface.addColumn('StudentEducations', 'startingYear', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn('StudentEducations', 'endingYear', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  }
};