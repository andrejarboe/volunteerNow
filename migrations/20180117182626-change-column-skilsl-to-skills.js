'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.renameColumn('users', 'skils', 'skills')
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.renameColumn('users', 'skills', 'skils')
    }
};