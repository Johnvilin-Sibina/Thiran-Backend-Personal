'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TechStacks', [
      {
        name: 'MERN',
        description: 'MongoDB, Express.js, React.js, Node.js full stack JavaScript framework.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MEAN',
        description: 'MongoDB, Express.js, Angular, Node.js full stack JavaScript framework.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LAMP',
        description: 'Linux, Apache, MySQL, PHP stack for web development.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Django',
        description: 'Python-based web framework with ORM and templating.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruby on Rails',
        description: 'Ruby-based full stack web application framework.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flutter',
        description: 'Google’s UI toolkit for building natively compiled applications.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spring Boot',
        description: 'Java-based framework to build microservices and web apps.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vue.js',
        description: 'Progressive JavaScript framework for building UIs.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TechStacks', null, {});
     await queryInterface.sequelize.query(`ALTER SEQUENCE "TechStacks_id_seq" RESTART WITH 1`);
  }
};
