//app/models/package_model.js

var mongoose = require('mongoose');

var Package = mongoose.model('Package', {
	carrier: String, 
	date: String, 
	recipient: String
});

module.exports = {
	getPackages: function (req, res){
		Package.find({}, function (err, packages){
			if (err) {
				return console.error('could not get packages');
			}
			res.send(packages);
		});
	},
	addPackage: function (packageInfo){
		var packageObj = new Package(packageInfo);
		packageObj.save(function (err){
			if (err) {
				return console.error("Could not save package.");
			} else {
				console.log("Package saved");
			}
		});
	}
};

