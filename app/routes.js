 // app/routes.js

// grab the nerd model we just created + package model
var path = require('path');
var Form = require('./models/form');

var Package = require('./models/package_model');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // packages
    app.get('/api/packages/add', function (req, res) {
        console.log('/api/packages/add', req)
        // Package.addPackage(req.data.??????);
    });

    app.get('/api/packages/get_all', Package.getPackages);

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, forms) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(forms); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        console.log('serving index!');
        res.sendFile(path.resolve('./public/index.html')); // load our public/index.html file
    });

};

    