import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class StudentSkill extends Model {
    static associate(models) {
      StudentSkill.belongsTo(models.Student, {foreignKey:'studentId'});
      StudentSkill.belongsTo(models.Skill, {foreignKey:'skillId'});
    }
  }
  StudentSkill.init(
    {
      skillId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "StudentSkill",
      tableName: "StudentSkills",
      timestamps: true
    }
  );
  return StudentSkill;
};
