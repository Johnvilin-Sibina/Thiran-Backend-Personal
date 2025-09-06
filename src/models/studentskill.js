import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class StudentSkill extends Model {
  static associate(models) {
    StudentSkill.belongsTo(models.Student, { foreignKey: "studentId" });
    StudentSkill.belongsTo(models.Skill, { foreignKey: "skillId" });
  }
}
StudentSkill.init(
  {
    skillId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "StudentSkill",
    tableName: "StudentSkills",
    paranoid: true,
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    },
  }
);
export default StudentSkill;
