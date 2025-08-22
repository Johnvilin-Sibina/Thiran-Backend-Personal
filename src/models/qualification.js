import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class Qualification extends Model {
    static associate(models) {
      Qualification.hasMany(models.Student, {foreignKey: 'qualificationId'})
    }
  }
  Qualification.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Qualification',
    tableName: 'Qualifications',
    paranoid: true,
    timestamps: true
  });
export default Qualification;