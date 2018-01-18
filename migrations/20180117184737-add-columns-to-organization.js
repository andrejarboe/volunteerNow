'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.addColumn('Organizations', 'organization_desc', Sequelize.STRING);
        queryInterface.addColumn('Organizations', 'contact_person_role', Sequelize.STRING);
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.removeColumn('Organizations', 'organization_desc');
        queryInterface.removeColumn('Organizations', 'contact_person_role');
    }
};