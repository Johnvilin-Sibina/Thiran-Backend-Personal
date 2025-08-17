'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      techStackId: {
        type: Sequelize.INTEGER,
        references:{
          model:'TechStacks',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },
      studentId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Students',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },
      developmentArea: {
        type: Sequelize.ENUM(
          'Frontend',
          'Backend',
          'Fullstack'
        )
      },
      gitHub: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');    
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Projects_developmentArea";')
  }
};