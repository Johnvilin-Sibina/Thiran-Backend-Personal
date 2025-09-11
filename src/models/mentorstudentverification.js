import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js"; 

  class MentorStudentVerification extends Model {
    
    static associate(models) {
      MentorStudentVerification.belongsTo(models.Mentor,{foreignKey:'mentorId'})
      MentorStudentVerification.belongsTo(models.Student,{foreignKey:'studentId'})
    }
  }
  MentorStudentVerification.init({
    studentId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true
      },
    mentorId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    status: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'MentorStudentVerification',
    tableName: "MentorStudentVerifications",
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'deletedAt', 'studentId', 'mentorId']
      }
    }
  });
  export default MentorStudentVerification;