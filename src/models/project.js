import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsTo(models.TechStack, {foreignKey: 'techStackId'})
      Project.belongsTo(models.Student, {foreignKey: 'studentId'})
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    techStackId: DataTypes.BIGINT,
    studentId: DataTypes.BIGINT,
    developmentArea: {
      type:DataTypes.ENUM(
        'Frontend',
        'Backend',
        'Fullstack'
      )
    },
    gitHub: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};