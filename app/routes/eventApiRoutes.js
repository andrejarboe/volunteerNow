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

  // get routue for all the events avaliable 
  app.get("/api/events", function (req, res) {
    query.OrganizationId = req.query.organization_id;

    db.Events.findAll({
      include: [ db.Organization ],
      where: query
    }).then(function (dbPost) {
      res.json(dbPost);
    });

  });

}