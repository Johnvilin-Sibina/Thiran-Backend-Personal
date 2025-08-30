'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Students','linkedinProfile',{
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('Students','isVerified',{
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })
    await queryInterface.addColumn('Students','profilePicture',{
      type: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Students','linkedinProfile')
   await queryInterface.removeColumn('Students','isVerified')
   await queryInterface.removeColumn('Students','profilePicture')
  }
};