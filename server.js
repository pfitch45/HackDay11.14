//server.js file

//modules **********************************************
var express				= require('express');
var app					= express();
var bodyParser 			= require('body-parser');
var methodOverride 		= require('method-override');
var http 				= require('http');
var mongoose			= require('mongoose');

//configurizatsiya *********************************************

var db = require('./config/db');

//set port

var port = process.env.PORT || 9000;

//connect to MongoDB database
//(uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url);

//get all data of the body (POST) parameters
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json' }));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//override with the X-HTTP-Method-Overrride header in the request.  simunlate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Overrride' ));

//set the static files location/public/img will be /img for users
app.use(express.static(__dirname + '/public'));

//routes *********************************

require('./app/routes')(app); //configure our routes

//start app ***************************
//start up at http://localhost:8080 
app.listen(port);

//shortcut to the user 
console.log('Magic happens on port ' + port);

//expose app
exports = module.exports = app;