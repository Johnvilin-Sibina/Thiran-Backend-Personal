import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Student extends Model {
  static associate(models) {
    // Student.belongsTo(models.College,{
    //   foreignKey : "collegeId",
    // });
    // Student.belongsTo(models.Department,{
    //   foreignKey : "departmentId",
    // });
    // Student.belongsTo(models.Qualification,{
    //   foreignKey: "qualificationId",
    // });
    Student.belongsToMany(models.College,{
      through: models.StudentEducation,
      foreignKey: "studentId",
      otherKey: "collegeId"
    })
    Student.belongsToMany(models.Department,{
      through: models.StudentEducation,
      foreignKey: "studentId",
      otherKey: 'departmentId'
    })
    Student.belongsToMany(models.Qualification,{
      through: models.StudentEducation,
      foreignKey: "studentId",
      otherKey: "qualificatonId"
    })
    Student.belongsTo(models.Role,{
      foreignKey:"roleId",
    });
    Student.hasMany(models.Project,{
      foreignKey: "studentId",
    });
    Student.belongsToMany(models.Mentor,{
      through: models.StudentMentorRemark,
      foreignKey: "studentId",
      otherKey: "mentorId"
    });
    Student.belongsToMany(models.Skill, {
      through : models.StudentSkill,
      foreignKey: "studentId",
      otherKey: "skillId"
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
    roleId: DataTypes.INTEGER,
    currentYear: {
      type: DataTypes.ENUM("Year1", "Year2", "Year3", "FinalYear", "PassedOut"),
    },
    currentStatus: {
      type: DataTypes.ENUM("Employed", "NotEmployed", "Internship"),
    },
    linkedinProfile: DataTypes.STRING,
    profilePricture: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN
  },
  {
    sequelize,
    modelName: "Student",
    tableName: "Students",
    paranoid: true,
    timestamps: true,
    defaultScope : {
      attributes : {
        exclude : ["qualificationId", "departmentId", "collegeId", "roleId","createdAt","updatedAt", "deletedAt",]
      }
    }
  },
);

export default Student;
