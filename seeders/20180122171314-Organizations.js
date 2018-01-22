"use strict";
var faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    // seed User table with 100 fake users
    var organizationInfo = [];

    for (var i = 0; i < 100; i++) {
      var organization_name = faker.company.companyName();
      var organization_desc = faker.company.catchPhraseDescriptor();
      var address = faker.address.streetAddress();
      var city = faker.address.city();
      var zip = faker.address.zipCode();
      var contact_person =  faker.name.firstName();
      var contact_person_role =  faker.name.jobTitle();
      var email =  faker.internet.email();
      var phone =  faker.phone.phoneNumber();

      organizationInfo.push({
        organization_name: organization_name,
        organization_desc: organization_desc,
        address: address,
        city: city,
        zip: zip,
        contact_person: contact_person,
        contact_person_role: contact_person_role,
        email: email,
        phone: phone
      });
    }

    return queryInterface.bulkInsert("Organizations", organizationInfo, {});
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
