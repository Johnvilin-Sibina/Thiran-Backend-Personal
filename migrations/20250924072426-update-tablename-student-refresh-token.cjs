'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable("StudentRefreshToken", "StudentRefreshTokens")
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable("StudentRefreshTokens", "StudentRefreshToken")
  }
};