import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.Student, {foreignKey: 'roleId'})
      Role.hasMany(models.Mentor, {foreignKey: 'roleId'})
    }
  }
  Role.init({
    responsibility: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'Roles',
    paranoid: true,
    timestamps: true
  });
export default Role;