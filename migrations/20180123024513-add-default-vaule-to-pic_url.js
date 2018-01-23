'use strict';

module.exports = {


        up: (queryInterface, Sequelize) => {
            queryInterface.changeColumn(
                'Users',
                'pic_url',
                 { type: Sequelize.STRING,
                   allowNull: false,
                    defaultValue: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                }
             )
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};