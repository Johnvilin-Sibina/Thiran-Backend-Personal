"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description: "Expert in web development with 10+ years of experience.",
        linkedinProfile: "https://linkedin.com/in/aarav-sharma",
        profilePicture: "https://example.com/images/aarav.jpg",
        updatedAt: new Date(),
      },
      { id: 1 }
    );
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description: "Data scientist specializing in AI and ML.",
        linkedinProfile: "https://linkedin.com/in/priya-iyer",
        profilePicture: "https://example.com/images/priya.jpg",
        updatedAt: new Date(),
      },
      { id: 2 }
    );
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description:
          "Full-stack developer passionate about mentoring students.",
        linkedinProfile: "https://linkedin.com/in/karan-verma",
        profilePicture: "https://example.com/images/karan.jpg",
        updatedAt: new Date(),
      },
      { id: 3 }
    );
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description: "Specialist in UI/UX design and front-end development.",
        linkedinProfile: "https://linkedin.com/in/neha-reddy",
        profilePicture: "https://example.com/images/neha.jpg",
        updatedAt: new Date(),
      },
      { id: 4 }
    );
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description: "Backend engineer with expertise in databases and APIs.",
        linkedinProfile: "https://linkedin.com/in/vikram-menon",
        profilePicture: "https://example.com/images/vikram.jpg",
        updatedAt: new Date(),
      },
      { id: 5 }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description: null,
        linkedinProfile: null,
        profilePicture: null,
        updatedAt: new Date(),
      },
      { id: 1 }
    );
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description: null,
        linkedinProfile: null,
        profilePicture: null,
        updatedAt: new Date(),
      },
      { id: 2 }
    );
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description: null,
        linkedinProfile: null,
        profilePicture: null,
        updatedAt: new Date(),
      },
      { id: 3 }
    );
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description: null,
        linkedinProfile: null,
        profilePicture: null,
        updatedAt: new Date(),
      },
      { id: 4 }
    );
    await queryInterface.bulkUpdate(
      "Mentors",
      {
        description: null,
        linkedinProfile: null,
        profilePicture: null,
        updatedAt: new Date(),
      },
      { id: 5 }
    );
  },
};
