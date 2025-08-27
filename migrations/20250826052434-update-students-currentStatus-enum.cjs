"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Create new ENUM type with the correct value
    await queryInterface.sequelize.query(`
      CREATE TYPE "enum_Students_currentStatus_new" 
      AS ENUM ('Employed', 'NotEmployed', 'Internship');
    `);

    // 2. Convert column to TEXT first (this avoids ENUM validation issues)
    await queryInterface.sequelize.query(`
      ALTER TABLE "Students"
      ALTER COLUMN "currentStatus"
      TYPE TEXT;
    `);

    // 3. Update any records with 'Intership' to 'Internship'
    await queryInterface.sequelize.query(
      `UPDATE "Students" SET "currentStatus" = 'Internship' 
      WHERE "currentStatus" = 'Intership';`
    );

    // 4. Now convert from TEXT to new ENUM
    await queryInterface.sequelize.query(`
      ALTER TABLE "Students"
      ALTER COLUMN "currentStatus"
      TYPE "enum_Students_currentStatus_new"
      USING "currentStatus"::"enum_Students_currentStatus_new";
    `);

    // 5. Drop old ENUM type
    await queryInterface.sequelize.query(`
      DROP TYPE "enum_Students_currentStatus";
    `);

    // 6. Rename new ENUM type to old name
    await queryInterface.sequelize.query(`
      ALTER TYPE "enum_Students_currentStatus_new"
      RENAME TO "enum_Students_currentStatus";
    `);
  },

  async down(queryInterface, Sequelize) {
    // Create old ENUM with misspelled value
    await queryInterface.sequelize.query(`
      CREATE TYPE "enum_Students_currentStatus_old" 
      AS ENUM ('Employed', 'NotEmployed', 'Intership');
    `);

    // Convert to TEXT first
    await queryInterface.sequelize.query(`
      ALTER TABLE "Students"
      ALTER COLUMN "currentStatus"
      TYPE TEXT;
    `);

    // Update 'Internship' back to 'Intership'
    await queryInterface.sequelize.query(
      `UPDATE "Students" SET "currentStatus" = 'Intership' 
      WHERE "currentStatus" = 'Internship';`
    );

    // Convert to old ENUM
    await queryInterface.sequelize.query(`
      ALTER TABLE "Students"
      ALTER COLUMN "currentStatus"
      TYPE "enum_Students_currentStatus_old"
      USING "currentStatus"::"enum_Students_currentStatus_old";
    `);

    // Clean up
    await queryInterface.sequelize.query(`
      DROP TYPE "enum_Students_currentStatus";
    `);

    await queryInterface.sequelize.query(`
      ALTER TYPE "enum_Students_currentStatus_old"
      RENAME TO "enum_Students_currentStatus";
    `);
  },
};