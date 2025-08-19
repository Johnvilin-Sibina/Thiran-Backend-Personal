import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      Skill.belongsToMany(models.Student, {
        through: models.StudentSkill,
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
  return Skill;
};
