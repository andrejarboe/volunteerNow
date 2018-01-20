'use strict';
module.exports = (sequelize, DataTypes) => {
  var Opportunity = sequelize.define('Opportunity', {
    title: DataTypes.STRING,
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
    org_id: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    num_of_volunteers: DataTypes.INTEGER,
    skills_needed: DataTypes.STRING,
    img_url: DataTypes.STRING,
    org_type_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    desc: DataTypes.STRING,
    email: DataTypes.STRING 

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Opportunity;
};