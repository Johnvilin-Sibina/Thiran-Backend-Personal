'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Mentors','linkedinProfile',{
    type: Sequelize.STRING
   })
   await queryInterface.addColumn('Mentors','description',{
    type: Sequelize.TEXT
   })
   await queryInterface.addColumn('Mentors','profilePicture',{
    type: Sequelize.STRING
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Mentors','linkedinProfile')
    await queryInterface.removeColumn('Mentors','description')
    await queryInterface.removeColumn('Mentors','profilePicture')
  }
};