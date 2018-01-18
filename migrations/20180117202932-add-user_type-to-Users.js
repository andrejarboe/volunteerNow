'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Users', 'user_type', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Users', 'user_type');
  }
};
