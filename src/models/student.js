import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.College, {foreignKey: 'collegeId'});
      Student.belongsTo(models.Department, {foreignKey: 'departmentId'});
      Student.belongsTo(models.Qualification, {foreignKey: 'qualificationId'});
      Student.belongsTo(models.Role, {foreignKey: 'roleId'});
      Student.hasMany(models.Project, {foreignKey: 'studentId'});
      Student.belongsToMany(models.Skill, {
        foreignKey: "studentId",
        otherKey: "skillId",
        through: "StudentSkill",
      });
      Student.belongsToMany(models.Mentor,{
        through: "StudentMentorRemark",
        foreignKey: "studentId",
        otherKey: "mentorId"
      })
    }
  }
  Student.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING(10),
      description: DataTypes.TEXT,
      qualificationId: DataTypes.INTEGER,
      departmentId: DataTypes.INTEGER,
      collegeId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
      currentYear: {
        type: DataTypes.ENUM(
          "Year1",
          "Year2",
          "Year3",
          "FinalYear",
          "PassedOut"
        ),
      },
      currentStatus: {
        type: DataTypes.ENUM("Employed", "NotEmployed", "Intership"),
      },
    },
    {
      sequelize,
      modelName: "Student",
      tableName: "Students",
      paranoid: true,
      timestamps: true,
    }
  );
export default Student;