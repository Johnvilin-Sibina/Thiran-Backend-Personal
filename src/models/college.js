import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class College extends Model {
    static associate(models) {
      College.hasMany(models.Student, {foreignKey: 'collegeId'})   
    }
  }
  College.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'College',
    tableName: 'Colleges',
    paranoid: true,
    timestamps: true
  });
  return College;
};