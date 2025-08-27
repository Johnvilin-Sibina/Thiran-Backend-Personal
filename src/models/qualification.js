import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class Qualification extends Model {
    static associate(models) {
      Qualification.belongsToMany(models.Student, 
        {
          through: models.StudentEducation,
          foreignKey: 'qualificationId',
          otherKey: 'studentId'
        })
    }
  }


Qualification.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Qualification',
    tableName: 'Qualifications',
    paranoid: true,
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    },
  });
export default Qualification;