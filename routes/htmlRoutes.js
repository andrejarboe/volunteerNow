// *********************************************************************************
// htmlRoutes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app){

  // index route loads index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

  // events route loads the event(s)
  app.get("/events/:id ", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/partials/events.html"));
  });


  //create event route loads post event page
  app.get("/events/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/partials/createEvent.html"));
  });


  //Organization profil route loads organization profile(s)
  app.get("/organization/:id ", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/partials/organization.html"));
  });

  //User profile route loads user profile
  app.get("/user-profile/:id ", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/partials/userProfile.html"));
  });



}

