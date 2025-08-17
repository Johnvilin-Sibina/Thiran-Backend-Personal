import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Qualification extends Model {
    static associate(models) {
      Qualification.hasMany(models.Student)
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
  return Qualification;
};