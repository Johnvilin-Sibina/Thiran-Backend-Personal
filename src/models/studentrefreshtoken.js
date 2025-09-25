import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";


  class StudentRefreshToken extends Model {
    static associate(models) {
      StudentRefreshToken.belongsTo(models.Student,{ foreignKey:'studentId' })
    }
  }
  StudentRefreshToken.init({
    studentId: DataTypes.INTEGER,
    refreshToken: DataTypes.STRING,
    revoked: DataTypes.BOOLEAN,
    ipAddress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentRefreshToken',
    tableName: 'StudentRefreshTokens',
    timestamps: true,
    defaultScope: {
      attributes:{
        exclude: ["createdAt","updatedAt","studentId"]
      }
    }
  });
  
  export default StudentRefreshToken;