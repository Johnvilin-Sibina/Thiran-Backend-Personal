'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Skills', [
    { name: 'JavaScript', studentId: 1, createdAt: new Date(), updatedAt: new Date() },
    { name: 'React', studentId: 1, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Node.js', studentId: 1, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Python', studentId: 2, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Django', studentId: 2, createdAt: new Date(), updatedAt: new Date() },
    { name: 'REST APIs', studentId: 2, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Java', studentId: 3, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Spring Boot', studentId: 3, createdAt: new Date(), updatedAt: new Date() },
    { name: 'MySQL', studentId: 3, createdAt: new Date(), updatedAt: new Date() },

    { name: 'C++', studentId: 4, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Data Structures', studentId: 4, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Algorithms', studentId: 4, createdAt: new Date(), updatedAt: new Date() },

    { name: 'HTML', studentId: 5, createdAt: new Date(), updatedAt: new Date() },
    { name: 'CSS', studentId: 5, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Bootstrap', studentId: 5, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Angular', studentId: 6, createdAt: new Date(), updatedAt: new Date() },
    { name: 'TypeScript', studentId: 6, createdAt: new Date(), updatedAt: new Date() },
    { name: 'RxJS', studentId: 6, createdAt: new Date(), updatedAt: new Date() },

    { name: 'MongoDB', studentId: 7, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Mongoose', studentId: 7, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Express.js', studentId: 7, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Ruby', studentId: 8, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Rails', studentId: 8, createdAt: new Date(), updatedAt: new Date() },
    { name: 'PostgreSQL', studentId: 8, createdAt: new Date(), updatedAt: new Date() },

    { name: 'PHP', studentId: 9, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Laravel', studentId: 9, createdAt: new Date(), updatedAt: new Date() },
    { name: 'MySQL', studentId: 9, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Flutter', studentId: 10, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Dart', studentId: 10, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Firebase', studentId: 10, createdAt: new Date(), updatedAt: new Date() },

   
    { name: 'Kotlin', studentId: 11, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Android Development', studentId: 11, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Git', studentId: 11, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Swift', studentId: 12, createdAt: new Date(), updatedAt: new Date() },
    { name: 'iOS Development', studentId: 12, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Xcode', studentId: 12, createdAt: new Date(), updatedAt: new Date() },

    { name: 'C#', studentId: 13, createdAt: new Date(), updatedAt: new Date() },
    { name: '.NET', studentId: 13, createdAt: new Date(), updatedAt: new Date() },
    { name: 'SQL Server', studentId: 13, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Vue.js', studentId: 14, createdAt: new Date(), updatedAt: new Date() },
    { name: 'JavaScript', studentId: 14, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Webpack', studentId: 14, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Docker', studentId: 15, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Kubernetes', studentId: 15, createdAt: new Date(), updatedAt: new Date() },
    { name: 'AWS', studentId: 15, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Terraform', studentId: 16, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Ansible', studentId: 16, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Jenkins', studentId: 16, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Python', studentId: 17, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Machine Learning', studentId: 17, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Data Science', studentId: 17, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Cybersecurity', studentId: 18, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Network Security', studentId: 18, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Ethical Hacking', studentId: 18, createdAt: new Date(), updatedAt: new Date() },

    { name: 'Big Data', studentId: 19, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Hadoop', studentId: 19, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Spark', studentId: 19, createdAt: new Date(), updatedAt: new Date() },

    { name: 'React Native', studentId: 20, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Expo', studentId: 20, createdAt: new Date(), updatedAt: new Date() },
    { name: 'Redux', studentId: 20, createdAt: new Date(), updatedAt: new Date() }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
