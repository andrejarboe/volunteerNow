'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    skills: DataTypes.STRING,
    user_type: DataTypes.STRING,
    experience: DataTypes.STRING,
    password: DataTypes.STRING,
    password_confirmation: DataTypes.STRING,
    days_available: DataTypes.STRING,
    times_available: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(model.UserTimeSheet)
      }
    }
  });
  return User;
};


