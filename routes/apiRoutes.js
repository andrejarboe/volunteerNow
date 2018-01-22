// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var fs = require('fs');
//var S3FS = require('s3fs');
//var s3fsImpl = new S3FS('volunteernowapp', {
var BUCKET_NAME = 'volunteernowapp';
var accessKeyId = 'AKIAJGFAG4GDA4D7NGNA';
var secretAccessKey = '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';
//	secretAccessKey: 'YwBBGdNDZS6ko+BJFqI2Q2gpmJlXG7xONHi0sFwu'
//});
const AWS = require('aws-sdk');
const Busboy = require('busboy');

function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    Bucket: BUCKET_NAME
  });

s3bucket.createBucket(function() {
    var params = {
        Bucket: BUCKET_NAME,
        Key: 'pic',
        Body: file.name
    };
    s3bucket.upload(params, function(err, data) {
        if (err) {
            console.log('error in callback');
            console.log(err);
        }
        console.log('success');
        console.log(data);
    });
});
}

// Routes
// =============================================================
module.exports = function(app) {
app.post('/api/upload', function (req, res, next) {
    // This grabs the additional parameters so in this case passing in
    // "element1" with a value.
    const element1 = 'pic_name';

    var busboy = new Busboy({ headers: req.headers });

    // The file upload has completed
    busboy.on('finish', function() {
      console.log('Upload finished');
      
      // Your files are stored in req.files. In this case,
      // you only have one and it's req.files.element2:
      // This returns:
      // {
      //    element2: {
      //      data: ...contents of the file...,
      //      name: 'Example.jpg',
      //      encoding: '7bit',
      //      mimetype: 'image/png',
      //      truncated: false,
      //      size: 959480
      //    }
      // }
      
      // Grabs your file object from the request.
      const file = req.files.pic;
      //console.log(file.data);
      
      // Begins the upload to the AWS S3
      uploadToS3(file);
      res.json();
    });

    req.pipe(busboy);

  });
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

    // POST route for saving a new user
    app.post("/api/users", function(req, res, Next) {


        req.on('data', (data) => {
            console.log("hello" + data.toString());
        });

   
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            dob: req.body.dob,
            gender: req.body.gender,
            mail: req.body.email,
            phone: req.body.phone,
            skills: req.body.skills,
            user_type: req.body.user_type,
            experience: req.body.experience,
            pic_url: req.body.pic_url,
            password: req.body.password,
            password_confirmation: req.body.password_confirmation,
            days_available: req.body.days_available,
            times_available: req.body.times_available

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