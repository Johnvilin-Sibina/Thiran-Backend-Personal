"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2021-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/arjun-kumar",
        profilePicture: "https://example.com/images/arjun.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 1 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2023-05-01"),
        isAvailableToWork: false,
        linkedinProfile: "https://linkedin.com/in/sneha-iyer",
        profilePicture: "https://example.com/images/sneha.jpg",
        isVerified: false,
        updatedAt: new Date(),
      },
      { id: 2 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2023-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/ravi-sharma",
        profilePicture: "https://example.com/images/ravi.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 3 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2019-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/pooja-menon",
        profilePicture: "https://example.com/images/pooja.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 4 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2024-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/aditya-gupta",
        profilePicture: "https://example.com/images/aditya.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 5 }
    );
    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2024-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/deepika-rao",
        profilePicture: "https://example.com/images/deepika.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 6 }
    );
    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2022-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/karthik-iyer",
        profilePicture: "https://example.com/images/karthik.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 7 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2023-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/anjali-shah",
        profilePicture: "https://example.com/images/anjali.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 8 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2024-05-01"),
        isAvailableToWork: false,
        linkedinProfile: "https://linkedin.com/in/vikram-singh",
        profilePicture: "https://example.com/images/vikram.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 9 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2025-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/sonal-patel",
        profilePicture: "https://example.com/images/sonal.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 10 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2025-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/rohit-desai",
        profilePicture: "https://example.com/images/rohit.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 11 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2023-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/meera-iyer",
        profilePicture: "https://example.com/images/meera.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 12 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2024-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/harsh-kumar",
        profilePicture: "https://example.com/images/harsh.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 13 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2025-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/nisha-singh",
        profilePicture: "https://example.com/images/nisha.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 14 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2025-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/amit-verma",
        profilePicture: "https://example.com/images/amit.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 15 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2025-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/riya-patel",
        profilePicture: "https://example.com/images/riya.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 16 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2024-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/suresh-kumar",
        profilePicture: "https://example.com/images/suresh.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 17 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2024-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/kavya-joshi",
        profilePicture: "https://example.com/images/kavya.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 18 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2024-05-01"),
        isAvailableToWork: true,
        linkedinProfile: "https://linkedin.com/in/aarav-sharma",
        profilePicture: "https://example.com/images/aarav.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 19 }
    );

    await queryInterface.bulkUpdate(
      "Students",
      {
        yearOfGraduation: new Date("2023-05-01"),
        isAvailableToWork: false,
        linkedinProfile: "https://linkedin.com/in/meera-patel",
        profilePicture: "https://example.com/images/meera2.jpg",
        isVerified: true,
        updatedAt: new Date(),
      },
      { id: 20 }
    );
  },

  async down(queryInterface, Sequelize) {
    // Reset all the newly added fields to null
    for (let i = 1; i <= 20; i++) {
      await queryInterface.bulkUpdate(
        "Students",
        {
          yearOfGraduation: null,
          isAvailableToWork: null,
          linkedinProfile: null,
          profilePicture: null,
          isVerified: null,
          updatedAt: new Date(),
        },
        { id: i }
      );
    }
  },
};