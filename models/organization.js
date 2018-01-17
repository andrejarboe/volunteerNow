'use strict';
module.exports = (sequelize, DataTypes) => {
  var Organization = sequelize.define('Organization', {
    organization_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Organization;
};