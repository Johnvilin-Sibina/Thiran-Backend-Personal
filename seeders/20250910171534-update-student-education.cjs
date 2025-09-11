"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2017-07-01",
        endingYear: "2021-05-30",
      },
      { studentId: 1, qualificationId: 1, departmentId: 1, collegeId: 1 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2017-07-01",
        endingYear: "2021-05-30",
      },
      { studentId: 2, qualificationId: 1, departmentId: 8, collegeId: 2 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2021-07-01",
        endingYear: "2023-05-30",
      },
      { studentId: 2, qualificationId: 2, departmentId: 8, collegeId: 1 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2021-07-01",
        endingYear: "2023-05-30",
      },
      { studentId: 3, qualificationId: 5, departmentId: 10, collegeId: 3 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2018-07-01",
        endingYear: "2021-05-30",
      },
      { studentId: 3, qualificationId: 4, departmentId: 10, collegeId: 3 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2016-07-01",
        endingYear: "2019-05-30",
      },
      { studentId: 4, qualificationId: 4, departmentId: 7, collegeId: 4 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2020-07-01",
        endingYear: "2024-05-30",
      },
      { studentId: 5, qualificationId: 1, departmentId: 2, collegeId: 5 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2022-07-01",
        endingYear: "2024-05-30",
      },
      { studentId: 6, qualificationId: 2, departmentId: 9, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2018-07-01",
        endingYear: "2022-05-30",
      },
      { studentId: 6, qualificationId: 1, departmentId: 9, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2018-07-01",
        endingYear: "2022-05-30",
      },
      { studentId: 7, qualificationId: 1, departmentId: 1, collegeId: 7 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2021-07-01",
        endingYear: "2023-05-30",
      },
      { studentId: 8, qualificationId: 5, departmentId: 10, collegeId: 8 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2018-07-01",
        endingYear: "2021-05-30",
      },
      { studentId: 8, qualificationId: 4, departmentId: 10, collegeId: 8 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2021-07-01",
        endingYear: "2024-05-30",
      },
      { studentId: 9, qualificationId: 3, departmentId: 8, collegeId: 9 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2022-07-01",
        endingYear: "2025-05-30",
      },
      { studentId: 10, qualificationId: 4, departmentId: 7, collegeId: 10 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2021-07-01",
        endingYear: "2025-05-30",
      },
      { studentId: 11, qualificationId: 1, departmentId: 2, collegeId: 1 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2021-07-01",
        endingYear: "2023-05-30",
      },
      { studentId: 12, qualificationId: 2, departmentId: 9, collegeId: 2 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2017-07-01",
        endingYear: "2021-05-30",
      },
      { studentId: 12, qualificationId: 1, departmentId: 9, collegeId: 2 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2021-07-01",
        endingYear: "2024-05-30",
      },
      { studentId: 13, qualificationId: 4, departmentId: 7, collegeId: 3 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2021-07-01",
        endingYear: "2025-05-30",
      },
      { studentId: 14, qualificationId: 1, departmentId: 1, collegeId: 4 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2022-07-01",
        endingYear: "2025-05-30",
      },
      { studentId: 15, qualificationId: 3, departmentId: 5, collegeId: 5 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2022-07-01",
        endingYear: "2025-05-30",
      },
      { studentId: 16, qualificationId: 4, departmentId: 7, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2021-07-01",
        endingYear: "2024-05-30",
      },
      { studentId: 17, qualificationId: 3, departmentId: 8, collegeId: 7 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2022-07-01",
        endingYear: "2024-05-30",
      },
      { studentId: 18, qualificationId: 5, departmentId: 9, collegeId: 8 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2019-07-01",
        endingYear: "2022-05-30",
      },
      { studentId: 18, qualificationId: 4, departmentId: 9, collegeId: 8 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2022-07-01",
        endingYear: "2024-05-30",
      },
      { studentId: 19, qualificationId: 2, departmentId: 9, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2018-07-01",
        endingYear: "2022-05-30",
      },
      { studentId: 19, qualificationId: 1, departmentId: 9, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      {
        startingYear: "2020-07-01",
        endingYear: "2023-05-30",
      },
      { studentId: 20, qualificationId: 4, departmentId: 1, collegeId: 3 }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2017, endingYear: 2021 },
      { studentId: 1, qualificationId: 1, departmentId: 1, collegeId: 1 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2017, endingYear: 2021 },
      { studentId: 2, qualificationId: 1, departmentId: 8, collegeId: 2 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2021, endingYear: 2023 },
      { studentId: 2, qualificationId: 2, departmentId: 8, collegeId: 1 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2021, endingYear: 2023 },
      { studentId: 3, qualificationId: 5, departmentId: 10, collegeId: 3 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2018, endingYear: 2021 },
      { studentId: 3, qualificationId: 4, departmentId: 10, collegeId: 3 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2016, endingYear: 2019 },
      { studentId: 4, qualificationId: 4, departmentId: 7, collegeId: 4 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2020, endingYear: 2024 },
      { studentId: 5, qualificationId: 1, departmentId: 2, collegeId: 5 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2022, endingYear: 2024 },
      { studentId: 6, qualificationId: 2, departmentId: 9, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2018, endingYear: 2022 },
      { studentId: 6, qualificationId: 1, departmentId: 9, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2018, endingYear: 2022 },
      { studentId: 7, qualificationId: 1, departmentId: 1, collegeId: 7 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2021, endingYear: 2023 },
      { studentId: 8, qualificationId: 5, departmentId: 10, collegeId: 8 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2018, endingYear: 2021 },
      { studentId: 8, qualificationId: 4, departmentId: 10, collegeId: 8 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2021, endingYear: 2024 },
      { studentId: 9, qualificationId: 3, departmentId: 8, collegeId: 9 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2022, endingYear: 2025 },
      { studentId: 10, qualificationId: 4, departmentId: 7, collegeId: 10 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2021, endingYear: 2025 },
      { studentId: 11, qualificationId: 1, departmentId: 2, collegeId: 1 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2021, endingYear: 2023 },
      { studentId: 12, qualificationId: 2, departmentId: 9, collegeId: 2 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2017, endingYear: 2021 },
      { studentId: 12, qualificationId: 1, departmentId: 9, collegeId: 2 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2021, endingYear: 2024 },
      { studentId: 13, qualificationId: 4, departmentId: 7, collegeId: 3 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2021, endingYear: 2025 },
      { studentId: 14, qualificationId: 1, departmentId: 1, collegeId: 4 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2022, endingYear: 2025 },
      { studentId: 15, qualificationId: 3, departmentId: 5, collegeId: 5 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2022, endingYear: 2025 },
      { studentId: 16, qualificationId: 4, departmentId: 7, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2021, endingYear: 2024 },
      { studentId: 17, qualificationId: 3, departmentId: 8, collegeId: 7 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2022, endingYear: 2024 },
      { studentId: 18, qualificationId: 5, departmentId: 9, collegeId: 8 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2019, endingYear: 2022 },
      { studentId: 18, qualificationId: 4, departmentId: 9, collegeId: 8 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2022, endingYear: 2024 },
      { studentId: 19, qualificationId: 2, departmentId: 9, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2018, endingYear: 2022 },
      { studentId: 19, qualificationId: 1, departmentId: 9, collegeId: 6 }
    );
    await queryInterface.bulkUpdate(
      "StudentEducations",
      { startingYear: 2020, endingYear: 2023 },
      { studentId: 20, qualificationId: 4, departmentId: 1, collegeId: 3 }
    );
  },
};