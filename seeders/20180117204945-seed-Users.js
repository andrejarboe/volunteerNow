'use strict';
var faker = require('faker');

module.exports = {
up: (queryInterface, Sequelize) => {


        // seed User table with 100 fake users
        var userInfo = [];

        for (var i = 0; i < 100; i++) {
            var firstName = faker.name.firstName();
            var lastName = faker.name.lastName();
            var address = faker.address.streetAddress();
            var city = faker.address.city();
            var zip = faker.address.zipCode();
            var phone = faker.phone.phoneNumber();
            var email = faker.internet.email();
            var pic = faker.image.avatar();
            var dob = faker.date.past();

            userInfo.push({
                first_name: firstName,
                last_name: lastName,
                address: address,
                city: city,
                zip_code: zip,
                phone: phone,
                email: email,
                pic_url: pic,
                dob: dob,
                user_type: "volunteer"

            })
        }

        return queryInterface.bulkInsert('Users', userInfo, {});

    },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
