import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class Mentor extends Model {
    static associate(models) {
      Mentor.belongsTo(models.Role, {foreignKey: 'roleId'})
      Mentor.belongsToMany(models.Student,{
        through: models.StudentMentorRemark,
        foreignKey: "mentorId",
        otherKey: "studentId",
      })
    }
  }
  Mentor.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    roleId: DataTypes.SMALLINT,
    description: DataTypes.TEXT,
    linkedinProfile: DataTypes.STRING,
    profilePricture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mentor',
    tableName: 'Mentors',
    paranoid: true,
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ["roleId", "createdAt", "updatedAt", "deletedAt"],
      },
    },
  });
export default Mentor;