var bcrypt = require("bcrypt-nodejs");
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
    phone: DataTypes.STRING,
    skills: DataTypes.STRING,
    user_type: DataTypes.STRING,
    experience: DataTypes.STRING,
    pic_url:{
             type: DataTypes.STRING,
              defaultValue: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
            },
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
   // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};


