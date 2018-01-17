'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        migration.renameColumn('users', 'skils', 'skills')
    },

    down: (queryInterface, Sequelize) => {
        migration.renameColumn('users', 'skills', 'skils')
    }
};