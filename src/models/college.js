import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class College extends Model {
    static associate(models) {
      College.belongsToMany(models.Student,{
        through: models.StudentEducation,
        foreignKey: "collegeId",
        otherKey: "studentId"
      })  
    }
  }


College.init(
  {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'College',
    tableName: 'Colleges',
    paranoid: true,
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    },
  });
export default College;