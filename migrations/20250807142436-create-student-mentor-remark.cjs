'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentMentorRemarks', {
        studentId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:"Students",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"RESTRICT"
      },
      mentorId: {
        type: Sequelize.BIGINT,
        allowNull: false,
         references:{
          model:"Mentors",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"RESTRICT"
      },
      remark: {
        type: Sequelize.TEXT
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
    await queryInterface.addConstraint('StudentMentorRemarks', {
      fields: ['studentId', 'mentorId'],
      type: 'primary key',
      name: 'PK_StudentMentorRemarks'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentMentorRemarks');
  }
};