



// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var fs = require('fs');
var S3FS = require('s3fs');

// Routes
// =============================================================
module.exports = function(app) {
   
// ######################################################
// Users api routing
// ######################################################


  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function(dbUser) {
      // We have access to the users as an argument inside of the callback function
      console.log("test");
      res.json(dbUser);
    });
  });

  // POST route for saving a new todo
  app.post("/api/users", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.User.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbUser) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  // DELETE route for deleting users. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/users/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });

  });

  // PUT route for updating users. We can get the updated todo data from req.body
  app.put("/api/users", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.User.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

// ######################################################
// Organizations api routing
// ######################################################

// GET route for getting all of the organizations
  app.get("/api/organizations", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Organization.findAll({}).then(function(dbOrganization) {
      // We have access to the organizations as an argument inside of the callback function
      res.json(dbOrganization);
    });
  });

  // POST route for saving a new todo
  app.post("/api/organizations", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Organization.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbOrganization) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbOrganization);
    });
  });

  // DELETE route for deleting organizations. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/organizations/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Organization.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbOrganization) {
      res.json(dbOrganization);
    });

  });

  // PUT route for updating organizations. We can get the updated todo data from req.body
  app.put("/api/organizations", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Organization.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbOrganization) {
      res.json(dbOrganization);
    });
  });


};
