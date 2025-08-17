'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Skills', [
    { name: 'JavaScript', createdAt: new Date(), updatedAt: new Date() },
    { name: 'React', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Node.js', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Python', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Django', createdAt: new Date(), updatedAt: new Date() },
    { name: 'REST APIs', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Java', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Spring Boot', createdAt: new Date(), updatedAt: new Date() },
    { name: 'MySQL', createdAt: new Date(), updatedAt: new Date() },

    { name: 'C++', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Data Structures', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Algorithms', createdAt: new Date(), updatedAt: new Date() },

    { name: 'HTML', createdAt: new Date(), updatedAt: new Date() },
    { name: 'CSS', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Bootstrap',  createdAt: new Date(), updatedAt: new Date() },

    { name: 'Angular', createdAt: new Date(), updatedAt: new Date() },
    { name: 'TypeScript', createdAt: new Date(), updatedAt: new Date() },
    { name: 'RxJS', createdAt: new Date(), updatedAt: new Date() },

    { name: 'MongoDB', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Mongoose', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Express.js', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Ruby', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Rails', createdAt: new Date(), updatedAt: new Date() },
    { name: 'PostgreSQL', createdAt: new Date(), updatedAt: new Date() },

    { name: 'PHP', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Laravel', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Flutter', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Dart', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Firebase', createdAt: new Date(), updatedAt: new Date() },

   
    { name: 'Kotlin', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Android Development', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Git', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Swift', createdAt: new Date(), updatedAt: new Date() },
    { name: 'iOS Development', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Xcode', createdAt: new Date(), updatedAt: new Date() },

    { name: 'C#', createdAt: new Date(), updatedAt: new Date() },
    { name: '.NET', createdAt: new Date(), updatedAt: new Date() },
    { name: 'SQL Server', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Vue.js', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Webpack', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Docker', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Kubernetes', createdAt: new Date(), updatedAt: new Date() },
    { name: 'AWS', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Terraform', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Ansible', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Jenkins', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Machine Learning', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Data Science', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Cybersecurity', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Network Security', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Ethical Hacking', createdAt: new Date(), updatedAt: new Date() },

    { name: 'Big Data', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Hadoop', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Spark', createdAt: new Date(), updatedAt: new Date() },

    { name: 'React Native', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Expo', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Redux', createdAt: new Date(), updatedAt: new Date() }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Skills', null, {});
     await queryInterface.sequelize.query(`ALTER SEQUENCE "Skills_id_seq" RESTART WITH 1`);
  }
};
