import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Student extends Model {
  static associate(models) {
    Student.belongsToMany(models.College, {
      through: models.StudentEducation,
      foreignKey: "studentId",
      otherKey: "collegeId",
    });
    Student.belongsToMany(models.Department, {
      through: models.StudentEducation,
      foreignKey: "studentId",
      otherKey: "departmentId",
    });
    Student.belongsToMany(models.Qualification, {
      through: models.StudentEducation,
      foreignKey: "studentId",
      otherKey: "qualificatonId",
    });
    Student.belongsTo(models.Role, {
      foreignKey: "roleId",
    });
    Student.hasMany(models.Project, {
      foreignKey: "studentId",
    });
    Student.belongsToMany(models.Mentor, {
      through: models.StudentMentorRemark,
      foreignKey: "studentId",
      otherKey: "mentorId",
    });
    Student.belongsToMany(models.Skill, {
      through: models.StudentSkill,
      foreignKey: "studentId",
      otherKey: "skillId",
    });
    Student.belongsToMany(models.Mentor, {
      through: models.MentorStudentVerification,
      foreignKey: "studentId",
      otherKey: "mentorId",
    });
    // Student.hasOne(models.MentorStudentVerification,{foreignKey:"studentId"})
  }
}
Student.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    searchableName:DataTypes.STRING,
    email: DataTypes.STRING,    
    googleId: DataTypes.STRING,
    phoneNumber: DataTypes.STRING(10),
    description: DataTypes.TEXT,
    roleId: DataTypes.INTEGER,
    yearOfGraduation: DataTypes.DATE,
    isAvailableToWork: DataTypes.BOOLEAN,
    linkedinProfile: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "Student",
    tableName: "Students",
    paranoid: true,
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: [
          "id",
          "searchableName",
          "googleId",
          "qualificationId",
          "departmentId",
          "collegeId",
          "roleId",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      },
    },
  }
);

export default Student;
