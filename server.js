// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var sequelizeRouter = require('sequelize-router');
var exphbs = require("express-handlebars"); 
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');
// Sets up the Express App
// =============================================================
var app = express();
app.use(busboy());
var PORT = process.env.PORT || 8080;
// Requiring our models for syncing
var db = require("./models");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(busboyBodyParser());
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));


// Routes
// =============================================================
require('./routes/htmlRoutes.js')(app);
require('./routes/apiRoutes.js')(app);

 
//app.use('/api', sequelizeRouter(db.User)); 
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




