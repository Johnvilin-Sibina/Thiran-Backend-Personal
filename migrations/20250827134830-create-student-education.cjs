'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentEducations', {
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
      collegeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Colleges",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"RESTRICT"
      },
      departmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Departments",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"RESTRICT"
      },
      qualificationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"Qualifications",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"RESTRICT"
      },
      startingYear: {
        type: Sequelize.INTEGER
      },
      endingYear: {
        type: Sequelize.INTEGER
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
    await queryInterface.addConstraint('StudentEducations',{
      fields:['studentId','collegeId','departmentId','qualificationId'],
      type: 'primary key',
      name: 'PK_StudentEducations'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentEducations');
  }
};