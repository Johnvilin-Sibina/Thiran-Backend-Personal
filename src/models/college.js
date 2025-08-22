import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class College extends Model {
    static associate(models) {
      College.hasMany(models.Student, {foreignKey: 'collegeId'})   
    }
  }
  College.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'College',
    tableName: 'Colleges',
    paranoid: true,
    timestamps: true
  });
export default College;