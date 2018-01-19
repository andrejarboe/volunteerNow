'use strict';
module.exports = (sequelize, DataTypes) => {
  var Opportunity = sequelize.define('Opportunity', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Opportunity;
};