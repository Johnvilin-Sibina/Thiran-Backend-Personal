import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.Student)
      Role.hasMany(models.Mentor)
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
  return Role;
};