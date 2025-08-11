import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
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
  });
  return Qualification;
};