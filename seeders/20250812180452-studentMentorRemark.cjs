'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('StudentMentorRemarks', [
      {
        studentId: 1,
        mentorId: 1,
        remark: 'Consistently demonstrates strong problem-solving skills and a keen interest in fullstack development.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 2,
        mentorId: 1,
        remark: 'Shows great dedication and quickly adapts to backend technologies.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 3,
        mentorId: 1,
        remark: 'Excellent teamwork and communication skills, always eager to learn.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 4,
        mentorId: 1,
        remark: 'Strong analytical mindset with good grasp of data structures and algorithms.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      
      {
        studentId: 5,
        mentorId: 2,
        remark: 'Creative and skilled in frontend UI design with attention to user experience.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 6,
        mentorId: 2,
        remark: 'Strong backend developer with excellent database management knowledge.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 7,
        mentorId: 2,
        remark: 'Shows enthusiasm for mobile app development and quick learning ability.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 8,
        mentorId: 2,
        remark: 'Balances frontend and backend tasks effectively with good project management skills.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      
      {
        studentId: 9,
        mentorId: 3,
        remark: 'Detail-oriented developer with strong skills in API development and integration.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 10,
        mentorId: 3,
        remark: 'Passionate about frontend development and always exploring new technologies.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 11,
        mentorId: 3,
        remark: 'Excellent fullstack skills with great problem-solving approach.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 12,
        mentorId: 3,
        remark: 'Reliable and responsible with strong debugging and testing capabilities.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      
      {
        studentId: 13,
        mentorId: 4,
        remark: 'Innovative thinker with a focus on scalable and maintainable code.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 14,
        mentorId: 4,
        remark: 'Great passion for UI/UX and frontend design aesthetics.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 15,
        mentorId: 4,
        remark: 'Shows good command over backend frameworks and database schemas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 16,
        mentorId: 4,
        remark: 'Highly motivated and self-driven developer with strong project delivery.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        studentId: 17,
        mentorId: 5,
        remark: 'Skilled frontend developer with a great eye for responsive design.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 18,
        mentorId: 5,
        remark: 'Effective fullstack developer with good teamwork skills.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 19,
        mentorId: 5,
        remark: 'Strong backend developer with a passion for optimizing APIs.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 20,
        mentorId: 5,
        remark: 'Creative and hardworking with great analytical skills.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('StudentMentorRemarks', null, {});
  }
};
