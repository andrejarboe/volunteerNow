// *********************************************************************************
// eventApiroutes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  //make routes for:
//   □ All
//   □ One 
//   □ Org
//   □ Time
// skills

  // get routue for all the events avaliable 
  app.get("/api/events", function (req, res) {
    query.OrganizationId = req.query.organization_id;

    db.Events.findOne({
      include: [ db.Organization ],
      where: query
    }).then(function (dbPost) {
      res.json(dbPost);
    });

  });

  // get route for all events from a specific organization
  app.get("/api/events/organization/:organization", function (req, res){
    db.Event.findAll({
      where: {
        organization: req.params.organization
      }
    }).then(function(dbEvent){

    });
  })

}