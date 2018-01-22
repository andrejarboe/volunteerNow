'use strict';

module.exports = {
        up: (queryInterface, Sequelize) => {

            // seed User table with 100 fake users
            var opportunityInfo = [];

            opportunityInfo.push({
                title: "Test Opp",
                contact: "Peter Fullen",
                address: "2159 Everleigh Dr" ,
                org_id: "45",
                city: 'Marietta', 
                state: 'GA',
                num_of_volunteers: '5', 
                skills_needed: 'Carpentry',
                img_url:'https://www.mustministries.org/image/mustministries/pics/behelp/volunteers/opportunities/groups.gif',
                phone: '404-931-8079'
            })

            return queryInterface.bulkInsert('Opportunities', opportunityInfo, {});

          /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
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