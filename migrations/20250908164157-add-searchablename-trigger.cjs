'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   // First, add the searchableName column if it doesn't exist
    await queryInterface.addColumn("Students", "searchableName", {
      type: Sequelize.STRING,
      allowNull: true
    });

    // Create the trigger function
     await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION update_searchable_name()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW."searchableName" := LOWER(TRIM(NEW."firstName" || NEW."lastName" || NEW.username));
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // Create the trigger
     await queryInterface.sequelize.query(`
      CREATE TRIGGER trigger_update_searchable_name
        BEFORE INSERT OR UPDATE OF "firstName", "lastName", username
        ON "Students"
        FOR EACH ROW
        EXECUTE FUNCTION update_searchable_name();
    `);

    // Update existing records
    await queryInterface.sequelize.query(`
      UPDATE "Students" 
      SET "searchableName" = LOWER("firstName" || "lastName" || username
      WHERE "searchableName" IS NULL;
    `);
  },

  async down (queryInterface, Sequelize) {
    // Drop the trigger
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS trigger_update_searchable_name ON "Students";');
    
    // Drop the function
    await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS update_searchable_name();');
    
    // Remove the column
    await queryInterface.removeColumn("Students", "searchableName");
  }
};