import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class TechStack extends Model {
    static associate(models) {
      TechStack.hasMany(models.Project)
    }
  }
  TechStack.init({
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TechStack',
    tableName: 'TechStacks',
    paranoid: true,
    timestamps: true
  });
  return TechStack;
};