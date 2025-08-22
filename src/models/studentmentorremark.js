import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

  class StudentMentorRemark extends Model {
    static associate(models) {
      StudentMentorRemark.belongsTo(models.Student, {foreignKey:'studentId'});
      StudentMentorRemark.belongsTo(models.Mentor, {foreignKey:'mentorId'});
    }
  }
  StudentMentorRemark.init({
    studentId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    mentorId:{
    type: DataTypes.INTEGER,
    primaryKey: true
  },
    remark: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'StudentMentorRemark',
    tableName: 'StudentMentorRemarks',
    timestamps: true
  });
export default StudentMentorRemark;