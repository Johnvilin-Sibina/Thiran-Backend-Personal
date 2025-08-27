
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('StudentEducations',[
    {
      studentId:1,
      qualificationId: 1, 
      departmentId: 1, 
      collegeId: 1, 
      startingYear:2017,
      endingYear:2021,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:2,
      qualificationId: 1, 
      departmentId: 8, 
      collegeId: 2, 
      startingYear:2017,
      endingYear:2021,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:2,
      qualificationId: 2, 
      departmentId: 8, 
      collegeId: 1, 
      startingYear:2021,
      endingYear:2023,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:3,
      qualificationId: 5, 
      departmentId: 10, 
      collegeId: 3, 
      startingYear:2021,
      endingYear:2023,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:3,
      qualificationId: 4, 
      departmentId: 10, 
      collegeId: 3, 
      startingYear:2018,
      endingYear:2021,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:4,
      qualificationId: 4, 
      departmentId: 7, 
      collegeId: 4, 
      startingYear:2016,
      endingYear:2019,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:5,
      qualificationId: 1,
      departmentId: 2,
      collegeId: 5, 
      startingYear:2020,
      endingYear:2024,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:6,
      qualificationId: 2, 
      departmentId: 9, 
      collegeId: 6, 
      startingYear:2022,
      endingYear:2024,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:6,
      qualificationId: 1, 
      departmentId: 9, 
      collegeId: 6, 
      startingYear:2018,
      endingYear:2022,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:7,
      qualificationId: 1, 
      departmentId: 1, 
      collegeId: 7, 
      startingYear:2018,
      endingYear:2022,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:8,
      qualificationId: 5, 
      departmentId: 10, 
      collegeId: 8,
      startingYear:2021,
      endingYear:2023,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:8,
      qualificationId: 4, 
      departmentId: 10, 
      collegeId: 8,
      startingYear:2018,
      endingYear:2021,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:9,
      qualificationId: 3, 
      departmentId: 8, 
      collegeId: 9, 
      startingYear:2021,
      endingYear:2024,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:10,
      qualificationId: 4, 
      departmentId: 7, 
      collegeId: 10, 
      startingYear:2022,
      endingYear:2025,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:11,
      qualificationId: 1, 
      departmentId: 2, 
      collegeId: 1,
      startingYear:2021,
      endingYear:2025,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:12,
      qualificationId: 2, 
      departmentId: 9, 
      collegeId: 2, 
      startingYear:2021,
      endingYear:2023,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:12,
      qualificationId: 1, 
      departmentId: 9, 
      collegeId: 2, 
      startingYear:2017,
      endingYear:2021,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:13,
      qualificationId: 4, 
      departmentId: 7, 
      collegeId: 3, 
      startingYear:2021,
      endingYear:2024,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:14,
      qualificationId: 1, 
      departmentId: 1, 
      collegeId: 4,
      startingYear:2021,
      endingYear:2025,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:15,
      qualificationId: 3, 
      departmentId: 5, 
      collegeId: 5, 
      startingYear:2022,
      endingYear:2025,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:16,
      qualificationId: 4, 
      departmentId: 7, 
      collegeId: 6,
      startingYear:2022,
      endingYear:2025,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:17,
      qualificationId: 3, 
      departmentId: 8, 
      collegeId: 7,
      startingYear:2021,
      endingYear:2024,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:18,
      qualificationId: 5, 
      departmentId: 9, 
      collegeId: 8,
      startingYear:2022,
      endingYear:2024,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:18,
      qualificationId: 4, 
      departmentId: 9, 
      collegeId: 8,
      startingYear:2019,
      endingYear:2022,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:19,
      qualificationId: 2,  
      departmentId: 9,     
      collegeId: 6,
      startingYear:2022,
      endingYear:2024,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:19,
      qualificationId: 1,  
      departmentId: 9,     
      collegeId: 6,
      startingYear:2018,
      endingYear:2022,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId:20,
      qualificationId: 4,  
      departmentId: 1,     
      collegeId: 3,
      startingYear:2020,
      endingYear:2023,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StudentEducations',null,{})
    await queryInterface.sequelize.query(`ALTER SEQUENCE "Students_id_seq" RESTART WITH 1`);
  }
};
