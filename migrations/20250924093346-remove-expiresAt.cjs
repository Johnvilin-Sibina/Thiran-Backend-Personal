'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.removeColumn("StudentRefreshTokens","expiresAt")
   await queryInterface.removeColumn("MentorRefreshTokens","expiresAt")
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.addColumn('StudentRefreshTokens',"expiresAt",{
    type: Sequelize.DATE
   })
   await queryInterface.addColumn('MentorRefreshTokens',"expiresAt",{
    type: Sequelize.DATE
   })
  }
};