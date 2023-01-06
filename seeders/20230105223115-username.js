'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'signups',
      [
        {
          username: 'nathan',
          email: 'dvdfdafa@gmail.com',
          password: 'Password123!',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('signups', null, {})
  }
}