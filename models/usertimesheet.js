'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserTimeSheet = sequelize.define('UserTimeSheet', {
    user_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    hours: DataTypes.DECIMAL,
    organization_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          UserTimeSheet.belongsTo(model.User);
      }
    }
  });
  return UserTimeSheet;
};