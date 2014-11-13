//app/models/package_model.js

var mongoose = require('mongoose');

var Package = mongoose.model('Package', {carrier: String, date: String, recepient: String});

module.exports = {
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


//create get ALL Packages method