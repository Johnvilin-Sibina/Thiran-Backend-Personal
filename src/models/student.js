import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.College)
      Student.belongsTo(models.Department)
      Student.belongsTo(models.Qualification)
      Student.belongsTo(models.Role)
      Student.hasMany(models.Project)
      Student.hasMany(models.StudentMentorRemark)
      Student.belongsToMany(models.Skill, {
        through: models.StudentSkill,
      });
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
        )
      },
      currentStatus: {
        type: DataTypes.ENUM("Employed", "NotEmployed", "Intership"),
      },
    },
    {
      sequelize,
      modelName: "Student",
      tableName: 'Students',
    paranoid: true,
    timestamps: true
    }
  );
  return Student;
};
