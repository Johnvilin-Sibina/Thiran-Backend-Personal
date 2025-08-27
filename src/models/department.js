import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class Department extends Model {
    static associate(models) {
      Department.belongsToMany(models.Student, 
        {
          through: models.StudentEducation,
          foreignKey: 'departmentId',
          otherKey: 'studentId'
        })
    }
}

Department.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Department',
    tableName: 'Departments',
    paranoid: true,
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    },
  });
export default Department;