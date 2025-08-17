import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.Student)
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
  return Department;
};