'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
    {
      firstName: 'Arjun',
      lastName: 'Kumar',
      username: 'arjun.k',
      email: 'arjun.kumar@example.com',
      phoneNumber: '9876543210',
      description: 'Passionate about fullstack development and AI.', 
      roleId: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Sneha',
      lastName: 'Iyer',
      username: 'sneha.iyer',
      email: 'sneha.iyer@example.com',
      phoneNumber: '9876512340',
      description: 'Interested in Data Science and Machine Learning.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ravi',
      lastName: 'Sharma',
      username: 'ravi.sharma',
      email: 'ravi.sharma@example.com',
      phoneNumber: '9988776655',
      description: 'Aspiring cybersecurity analyst.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Pooja',
      lastName: 'Menon',
      username: 'pooja.m',
      email: 'pooja.menon@example.com',
      phoneNumber: '9876001122',
      description: 'Specializes in frontend development with React.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Aditya',
      lastName: 'Gupta',
      username: 'aditya.g',
      email: 'aditya.gupta@example.com',
      phoneNumber: '9876123456',
      description: 'Focused on backend APIs and database management.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Deepika',
      lastName: 'Rao',
      username: 'deepika.rao',
      email: 'deepika.rao@example.com',
      phoneNumber: '9988123456',
      description: 'Machine Learning enthusiast and researcher.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Karthik',
      lastName: 'Iyer',
      username: 'karthik.iyer',
      email: 'karthik.iyer@example.com',
      phoneNumber: '9876543211',
      description: 'Fullstack developer with passion for React and Node.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Anjali',
      lastName: 'Shah',
      username: 'anjali.shah',
      email: 'anjali.shah@example.com',
      phoneNumber: '9876543222',
      description: 'Cybersecurity analyst and ethical hacker.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Vikram',
      lastName: 'Singh',
      username: 'vikram.singh',
      email: 'vikram.singh@example.com',
      phoneNumber: '9876543233',
      description: 'Data scientist working on NLP projects.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Sonal',
      lastName: 'Patel',
      username: 'sonal.patel',
      email: 'sonal.patel@example.com',
      phoneNumber: '9876543244',
      description: 'Frontend developer with expertise in Vue.js.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Rohit',
      lastName: 'Desai',
      username: 'rohit.desai',
      email: 'rohit.desai@example.com',
      phoneNumber: '9876543255',
      description: 'Backend developer specializing in Node.js and Express.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Meera',
      lastName: 'Iyer',
      username: 'meera.iyer',
      email: 'meera.iyer@example.com',
      phoneNumber: '9876543266',
      description: 'Interested in AI and deep learning.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Harsh',
      lastName: 'Kumar',
      username: 'harsh.kumar',
      email: 'harsh.kumar@example.com',
      phoneNumber: '9876543277',
      description: 'Mobile app developer with Flutter expertise.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Nisha',
      lastName: 'Singh',
      username: 'nisha.singh',
      email: 'nisha.singh@example.com',
      phoneNumber: '9876543288',
      description: 'Fullstack developer focusing on React and MongoDB.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Amit',
      lastName: 'Verma',
      username: 'amit.verma',
      email: 'amit.verma@example.com',
      phoneNumber: '9876543299',
      description: 'Cloud computing and DevOps enthusiast.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Riya',
      lastName: 'Patel',
      username: 'riya.patel',
      email: 'riya.patel@example.com',
      phoneNumber: '9876543300',
      description: 'Specializes in frontend and UI/UX design.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Suresh',
      lastName: 'Kumar',
      username: 'suresh.kumar',
      email: 'suresh.kumar@example.com',
      phoneNumber: '9876543311',
      description: 'Data analyst and visualization expert.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Kavya',
      lastName: 'Joshi',
      username: 'kavya.joshi',
      email: 'kavya.joshi@example.com',
      phoneNumber: '9876543322',
      description: 'AI researcher focusing on computer vision.',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
  firstName: 'Aarav',
  lastName: 'Sharma',
  username: 'aaravsharma',
  email: 'aarav.sharma@example.com',
  phoneNumber: '9876543212',
  description: 'Passionate about AI and Machine Learning.',
  roleId: 2,   
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'Meera',
  lastName: 'Patel',
  username: 'meerapatel',
  email: 'meera.patel@example.com',
  phoneNumber: '9123456780',
  description: 'Interested in Frontend Development and UI/UX.',
  roleId: 2,  
  createdAt: new Date(),
  updatedAt: new Date()
}
  ], {});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Students', null, {});
   await queryInterface.sequelize.query(`ALTER SEQUENCE "Students_id_seq" RESTART WITH 1`);
  }
};