import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Mentor extends Model {
    static associate(models) {
      Mentor.belongsTo(models.Role, {foreignKey: 'roleId'})
      Mentor.hasMany(models.StudentMentorRemark, {foreignKey: 'mentorId'})
    }
  }
  Mentor.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    roleId: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};