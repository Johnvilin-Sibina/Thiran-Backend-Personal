import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      Skill.belongsTo(models.Student, {foreignKey: 'studentId'})
    }
  }
  Skill.init({
    name: DataTypes.STRING,
    studentId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Skill',
    tableName: 'Skills'
  });
  return Skill;
};