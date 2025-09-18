"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Update the data
    await queryInterface.sequelize.query(`UPDATE "MentorStudentVerifications" 
      SET status='approved' WHERE status='pending'`);

    // Drop the default value
    await queryInterface.sequelize
      .query(`ALTER TABLE "MentorStudentVerifications" 
      ALTER COLUMN status DROP DEFAULT`);

    // Rename the old ENUM type
    await queryInterface.sequelize
      .query(`ALTER TYPE "enum_MentorStudentVerifications_status" 
      RENAME TO "enum_MentorStudentVerifications_status_old"`);

    // Create the new ENUM type
    await queryInterface.sequelize
      .query(`CREATE TYPE "enum_MentorStudentVerifications_status" 
      AS ENUM('approved','rejected')`);

    // Change the column's data type to the new ENUM type
    await queryInterface.sequelize
      .query(`ALTER TABLE "MentorStudentVerifications" 
      ALTER COLUMN status TYPE "enum_MentorStudentVerifications_status" 
      USING status::text::"enum_MentorStudentVerifications_status"`);

    // Drop the old ENUM type
    await queryInterface.sequelize.query(
      `DROP TYPE IF EXISTS "enum_MentorStudentVerifications_status_old"`
    );
  },

  async down(queryInterface, Sequelize) {
    // Rename the old ENUM type
    await queryInterface.sequelize
      .query(`ALTER TYPE "enum_MentorStudentVerifications_status" 
      RENAME TO "enum_MentorStudentVerifications_status_old"`);

    // Create the new ENUM type
    await queryInterface.sequelize
      .query(`CREATE TYPE "enum_MentorStudentVerifications_status" 
      AS ENUM('pending','approved','rejected')`);

    // Change the column's data type to the new ENUM type
    await queryInterface.sequelize
      .query(`ALTER TABLE "MentorStudentVerifications" 
      ALTER COLUMN status TYPE "enum_MentorStudentVerifications_status"
       USING status::text::"enum_MentorStudentVerifications_status"`);

    // Set the default value back to 'pending'
    await queryInterface.sequelize.query(
      `ALTER TABLE "MentorStudentVerifications" 
        ALTER COLUMN status SET DEFAULT 'pending'`
    );

    // Drop the old ENUM type
    await queryInterface.sequelize.query(
      `DROP TYPE IF EXISTS "enum_MentorStudentVerifications_status_old"`
    );
  },
};