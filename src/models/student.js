import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.College, {foreignKey: 'collegeId'})
      Student.belongsTo(models.Department, {foreignKey: 'departmentId'})
      Student.belongsTo(models.Qualification, {foreignKey: 'qualificationId'})
      Student.belongsTo(models.Role, {foreignKey: 'roleId'})
      Student.hasMany(models.Project, {foreignKey: 'studentId'})
      Student.hasMany(models.Skill, {foreignKey: 'studentId'})
      Student.hasMany(models.StudentMentorRemark, {foreignKey: 'studentId'})
    }
  }
  Student.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING(10),
      description: DataTypes.TEXT,
      qualificationId: DataTypes.BIGINT,
      departmentId: DataTypes.BIGINT,
      collegeId: DataTypes.BIGINT,
      roleId: DataTypes.BIGINT,
      currentYear: {
        type: DataTypes.ENUM(
          "Year1",
          "Year2",
          "Year3",
          "FinalYear",
          "PassedOut"
        )
      },
      currentStatus: {
        type: DataTypes.ENUM("Employed", "NotEmployed", "Intership"),
      },
    },
    {
      sequelize,
      modelName: "Student",
      tableName: 'Students'
    }
  );
  return Student;
};
