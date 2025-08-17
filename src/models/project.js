import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsTo(models.TechStack)
      Project.belongsTo(models.Student)
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    techStackId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
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
    tableName: 'Projects'
  });
  return Project;
};