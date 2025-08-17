'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentSkills', {
        skillId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Skills",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"RESTRICT"
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Students",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"RESTRICT"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // Define the composite primary key
    await queryInterface.addConstraint('StudentSkills', {
      fields: ['skillId', 'studentId'],
      type: 'primary key',
      name: 'PK_StudentSkills'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentSkills');
  }
};