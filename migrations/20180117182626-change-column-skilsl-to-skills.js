'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.renameColumn('Users', 'skils', 'skills')
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.renameColumn('Users', 'skills', 'skils')
    }
};