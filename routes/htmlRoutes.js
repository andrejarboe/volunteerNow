// *********************************************************************************
// htmlRoutes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var fs = require('fs');
var sequelizeRouter = require('sequelize-router');

var usersData = require("../data/user");

// Routes
// =============================================================
module.exports = function(app) {

    // index route loads index page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //user sign up forum
    app.get("/user/signup", function(req, res) {
        //   var fileContents = fs.readFileSync('./public/javascript/volunteer.js');
        // res.write(fileContents);
        res.sendFile(path.join(__dirname, "../public/user.html"));
     });

   
    //organization sign up forum
    app.get("/organization/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/organizationSignUp.html"));
    });


  app.get("/test", function(req, res){
    
  });

  //one user
  app.get("/user/:id", function(req, res) {   
    var id = req.params.id-1;
    res.render("user", usersData[id]);

    console.log(usersData[0]);
    
    
  });
   //org 

    /* handlebars
     *****************************************/
    //store user data
    //push data to route
    app.get("/users", function(req, res) {
        res.render("users", { usersData });
    });


    //one 
    //org 

    //one org

    //events

    // events route loads the event(s)
    app.get("/events/:id ", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/partials/events.html"));
    });

    //create event route loads post event page
    app.get("/events/create", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/partials/createEvent.html"));
    });


    //Organization profile route loads organization profile(s)
    app.get("/organization/:id ", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/partials/organization.html"));
    });

    //User profile route loads user profile
    app.get("/user-profile/:id ", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/partials/userProfile.html"));
    });

 app.get('/css/style.css', function(req, res) {
        res.sendFile(__dirname, "../public/css/style.css");
    });

    app.get('/javascript/volunteer.js', function(req, res) {
        res.sendFile(__dirname, "../public/javascript/volunteer.js");
    });

    app.get('/images/logo.png', function(req, res) {
        res.sendFile(__dirname, "../public/images/logo.png");
    });
    

}