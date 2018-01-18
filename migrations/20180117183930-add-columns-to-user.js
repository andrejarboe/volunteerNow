'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.addColumn('Users', 'days_available', Sequelize.STRING);
        queryInterface.addColumn('Users', 'times_available', Sequelize.STRING);
        queryInterface.addColumn('Users', 'state', Sequelize.STRING);      
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.removeColumn('Users', 'days_available');
        queryInterface.removeColumn('Users', 'times_available');
        queryInterface.removeColumn('Users', 'state');
        queryInterface.removeColumn('Users', 'phone');
    }
};

