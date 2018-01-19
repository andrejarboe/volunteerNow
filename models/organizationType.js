'use strict';
module.exports = (sequelize, DataTypes) => {
  var Organization_Type = sequelize.define('Organization_Type', {
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Organization_Type;
};