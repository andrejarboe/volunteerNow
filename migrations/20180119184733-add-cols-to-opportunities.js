'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.addColumn('Opportunities', 'email', Sequelize.STRING);
    },
    down: (queryInterface, Sequelize) => {
        queryInterface.removeColumn('Opportunities', 'email');
    }
};