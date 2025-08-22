import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.Student, {foreignKey: 'departmentId'})
    }
  }
  Department.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'Departments',
    paranoid: true,
    timestamps: true
  });
export default Department;