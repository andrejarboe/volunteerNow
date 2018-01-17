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

  // GET routue for all the events avaliable 
  app.get("/api/events", function (req, res) {
    query.OrganizationId = req.query.organization_id;

    db.Events.findAll({
      include: [db.Organization],
      where: query
    }).then(function (dbPost) {
      res.json(dbPost);
    });

  });

  // GET routue for a single the event 
  app.get(

  );

  // GET route for all events from a specific organization
  app.get("/api/events/organization/:organization", function (req, res) {
    db.Event.findAll({
      where: {
        organization: req.params.organization
      }
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  // POST route for saving a new event
  app.post("/api/events", function (req, res) {
    console.log(req.body);
    db.Event.create({
      title: req.bod.title,
      description: req.body.description,
      dates: req.body.dates,
      skills: req.body.skills,
      complete: res.body.complete
    }).then(function (dbEvent) {
      res.json(dbEvent);
    }).catch(function (err) {
      res.json(err);
    });
  });

  // DELETE route for deleting an event
  app.delete("/api/events/id", function(req, res){
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent){
      res.json(dbEvent)
    });
  });

  // PUT route for updating a new event
  app.put("/api/events/id", function(req, res){
    db.Event.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbEvent){
      res.json(dbEvent);
    });
  });
}