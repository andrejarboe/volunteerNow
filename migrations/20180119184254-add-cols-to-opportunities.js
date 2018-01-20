'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.addColumn('Opportunities', 'phone', Sequelize.STRING);
      queryInterface.addColumn('Opportunities', 'description', Sequelize.STRING);

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
      queryInterface.removeColumn('Opportunities', 'phone');
      queryInterface.removeColumn('Opportunities', 'description');


    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
