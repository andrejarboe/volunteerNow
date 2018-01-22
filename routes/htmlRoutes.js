// *********************************************************************************
// htmlRoutes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// var fs = require('fs');
// // var sequelizeRouter = require('sequelize-router');
// var usersData = require("../data/user");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

    // index route loads index page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //user sign up forum
    app.get("/signup", function(req, res) {
        //   var fileContents = fs.readFileSync('./public/javascript/volunteer.js');
        // res.write(fileContents);
        // If the user already has an account send them to the login page
        if (req.user) {
            res.redirect("/");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/login", function(req, res) {
         if (req.user) {
            res.redirect("/");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    //organization sign up forum
    app.get("/users", isAuthenticated, function(req, res) {

        res.sendFile(path.join(__dirname, "../public/user.html"));
    });

    app.get("/opportunities/new", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/opportunityinput.html"));
    });


    //     app.get("/test", function(req, res) {

    //     });

    //     //one user
    //     app.get("/user/:id", function(req, res) {
    //         var id = req.params.id - 1;
    //         res.render("user", usersData[id]);

    //         console.log(usersData[0]);

    //     });

    //     // Here we've add our isAuthenticated middleware to this route.
    //     // If a user who is not logged in tries to access this route they will be redirected to the signup page




    //     //org 

    //     /* handlebars
    //      *****************************************/
    //     //store user data
    //     //push data to route
    //     app.get("/users", function(req, res) {
    //         res.render("users", { usersData });
    //     });


    //     //one 
    //     //org 

    //     //one org

    //     //events

    //     // events route loads the event(s)
    //     app.get("/events/:id ", function(req, res) {
    //         res.sendFile(path.join(__dirname, "../views/partials/events.html"));
    //     });

    //     //create event route loads post event page
    //     app.get("/events/create", function(req, res) {
    //         res.sendFile(path.join(__dirname, "../views/partials/createEvent.html"));
    //     });


    //     //Organization profile route loads organization profile(s)
    //     app.get("/organization/:id ", function(req, res) {
    //         res.sendFile(path.join(__dirname, "../views/partials/organization.html"));
    //     });

    //     //User profile route loads user profile
    //     app.get("/user-profile/:id ", function(req, res) {
    //         res.sendFile(path.join(__dirname, "../views/partials/userProfile.html"));
    //     });

};