import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class StudentMentorRemark extends Model {
    static associate(models) {
      StudentMentorRemark.belongsTo(models.Student, {foreignKey:'studentId'});
      StudentMentorRemark.belongsTo(models.Mentor, {foreignKey:'mentorId'});
    }
  }
  StudentMentorRemark.init({
    studentId: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
    mentorId:{
    type: DataTypes.BIGINT,
    primaryKey: true
  },
    remark: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'StudentMentorRemark',
    tableName: 'StudentMentorRemarks'
  });
  return StudentMentorRemark;
};