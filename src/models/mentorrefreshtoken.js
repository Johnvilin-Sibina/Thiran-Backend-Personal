import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js"; 

  class MentorRefreshToken extends Model {
    static associate(models) {
      MentorRefreshToken.belongsTo(models.Mentor,{ foreignKey:"mentorId" })
    }
  }
  MentorRefreshToken.init({
    mentorId: DataTypes.INTEGER,
    refreshToken: DataTypes.STRING,
    revoked: DataTypes.BOOLEAN,
    ipAddress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MentorRefreshToken',
    tableName: 'MentorRefreshTokens',
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ["createdAt","updatedAt","mentorId"],
      }
    }
  });
  export default MentorRefreshToken;


