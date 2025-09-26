"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Drop the trigger that is associated with the columns we are updating
    await queryInterface.sequelize.query(
      `DROP TRIGGER IF EXISTS trigger_update_searchable_name 
      ON "Students";`
    );

    // Drop the function that is associated with the columns we are updating
    await queryInterface.sequelize.query(
      `DROP FUNCTION IF EXISTS update_searchable_name() CASCADE;`
    );

    // Allow firstName and lastName to be null
    await queryInterface.changeColumn("Students", "firstName", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn("Students", "lastName", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    //Add the new column isProfileComplete
    await queryInterface.addColumn("Students", "isProfileComplete", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });

    // Recreate the trigger function
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION update_searchable_name()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW."searchableName" := LOWER(TRIM(NEW."firstName" || NEW."lastName" || NEW.username));
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // Recreate the trigger
     await queryInterface.sequelize.query(`
      CREATE TRIGGER trigger_update_searchable_name
        BEFORE INSERT OR UPDATE OF "firstName", "lastName", username
        ON "Students"
        FOR EACH ROW
        EXECUTE FUNCTION update_searchable_name();
    `);
  },

  async down(queryInterface, Sequelize) {
     // Drop the trigger that is associated with the columns we are updating
    await queryInterface.sequelize.query(
      `DROP TRIGGER IF EXISTS trigger_update_searchable_name 
      ON "Students";`
    );

    // Drop the function that is associated with the columns we are updating
    await queryInterface.sequelize.query(
      `DROP FUNCTION IF EXISTS update_searchable_name() CASCADE;`
    );

    // Change the columns firstName and lastName back to not null
    await queryInterface.changeColumn("Students", "firstName", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn("Students", "lastName", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    //Remove the newly added column
    await queryInterface.removeColumn("Students", "isProfileComplete");

    // Recreate the trigger function
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION update_searchable_name()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW."searchableName" := LOWER(TRIM(NEW."firstName" || NEW."lastName" || NEW.username));
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // Recreate the trigger
     await queryInterface.sequelize.query(`
      CREATE TRIGGER trigger_update_searchable_name
        BEFORE INSERT OR UPDATE OF "firstName", "lastName", username
        ON "Students"
        FOR EACH ROW
        EXECUTE FUNCTION update_searchable_name();
    `);
  }
};