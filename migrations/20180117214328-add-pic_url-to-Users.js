'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
           queryInterface.addColumn('Users', 'pic_url', Sequelize.STRING);      
  },

  down: (queryInterface, Sequelize) => {
            queryInterface.removeColumn('Users', 'pic_url');      
  }
};
