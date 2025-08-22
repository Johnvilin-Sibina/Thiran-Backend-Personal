import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class Skill extends Model {
    static associate(models) {
      Skill.belongsToMany(models.Student, {
        through: "StudentSkill",
        foreignKey: "skillId",
        otherKey: "studentId",
      });
    }
  }
  Skill.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Skill",
      tableName: "Skills",
      paranoid: true,
      timestamps: true,
    }
  );
export default Skill;