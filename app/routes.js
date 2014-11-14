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

    app.post('/api/packages/add', function(req, res) {
        
        var idata = {
            recipient: req.body.recipient,
            carrier  : req.body.carrier
        };
        
        Package.addPackage(idata);
        res.send([idata]);
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

    