import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
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
    tableName: 'Roles'
  });
  return Role;
};