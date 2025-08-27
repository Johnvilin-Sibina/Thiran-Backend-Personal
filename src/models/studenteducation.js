"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentEducation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     StudentEducation.belongsTo(models.Student,{foreignKey:'studentId'})
     StudentEducation.belongsTo(models.College,{foreignKey:'collegeId'})
     StudentEducation.belongsTo(models.Department,{foreignKey:'departmentId'})
     StudentEducation.belongsTo(models.Qualification,{foreignKey:'qualifictionId'})
    }
  }
  StudentEducation.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      collegeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      departmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      qualificationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      startingYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1980,
          max: 2100,
          isInt: true,
        },
      },
      endingYear:{ 
        type: DataTypes.INTEGER,
         validate: {
          min: 1980,
          max: 2100,
          isInt: true,
        },
      }
    },
    {
      sequelize,
      modelName: "StudentEducation",
      tableName: "StudentEducations",
      paranoid: true,
      timestamps: true,
      defaultScope: {
        attributes: {
          exclude: ["studentId","collegeId","departmentId","qualificationId","createdAt", "updatedAt", "deletedAt"],
        },
      },
    }
  );
  return StudentEducation;
};