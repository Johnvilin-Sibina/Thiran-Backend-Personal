
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

  class StudentEducation extends Model {
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
        type: DataTypes.DATE
        
      },
      endingYear:{ 
        type: DataTypes.DATE
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

export default StudentEducation;