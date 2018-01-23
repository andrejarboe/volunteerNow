'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
                'Opportunities',
                'img_url',
                 { type: Sequelize.STRING,
                   allowNull: false,
                    defaultValue: 'https://business.leeds.ac.uk/typo3temp/_processed_/d/0/csm_event-PlaceholderImage_11ce1b7894.png'
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
