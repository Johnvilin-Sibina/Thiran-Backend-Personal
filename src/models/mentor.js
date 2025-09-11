import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Mentor extends Model {
  static associate(models) {
    Mentor.belongsTo(models.Role, { foreignKey: "roleId" });
    Mentor.belongsToMany(models.Student, {
      through: models.StudentMentorRemark,
      foreignKey: "mentorId",
      otherKey: "studentId",
    });
    Mentor.belongsToMany(models.Student, {
      through: models.MentorStudentVerification,
      foreignKey: "mentorId",
      otherKey: "studentId",
    });
    // Mentor.hasMany(models.MentorStudentVerification,{foreignKey:"mentorId"})
  }
}
Mentor.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    googleId: DataTypes.STRING,
    roleId: DataTypes.SMALLINT,
    description: DataTypes.TEXT,
    linkedinProfile: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Mentor",
    tableName: "Mentors",
    paranoid: true,
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ["id","googleId", "roleId", "createdAt", "updatedAt", "deletedAt"],
      },
    },
  }
);
export default Mentor;