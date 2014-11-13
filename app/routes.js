 // app/routes.js

// grab the nerd model we just created + package model
var Nerd = require('./models/nerd');

var Package = require('./models/package_model');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // packages
    app.get('/api/packages/add', function (req, res) {
        console.log('/api/packages/add', req);
        // Package.addPackage(req.data.??????);
    });

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, nerds) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        console.log('serving index!');
        res.sendfile('./public/views/nerd.html'); // load our public/index.html file
    });

};

    