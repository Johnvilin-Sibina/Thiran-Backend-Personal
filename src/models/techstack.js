import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";


  class TechStack extends Model {
    static associate(models) {
      TechStack.hasMany(models.Project, {foreignKey: 'techStackId'})
    }
  }
  TechStack.init({
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TechStack',
    tableName: 'TechStacks',
    paranoid: true,
    timestamps: true
  });
export default TechStack;