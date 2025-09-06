import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class Project extends Model {
    static associate(models) {
      Project.belongsTo(models.TechStack, {foreignKey: 'techStackId'})
      Project.belongsTo(models.Student, {foreignKey: 'studentId'})
    }
  }


Project.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    techStackId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    developmentArea: {
      type: DataTypes.ENUM("Frontend", "Backend", "Fullstack"),
    },
    gitHub: DataTypes.STRING,
    website: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Project',
    tableName: 'Projects',
    timestamps: true,
    paranoid: true,
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    },
  });
export default Project;