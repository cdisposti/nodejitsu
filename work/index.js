
/*
 * GET home page.
 */

var websites = require('../data');

var website = require('../website');

for(var websiteName in websites) {
	websites[websiteName] = website(websites[websiteName]);
}

exports.website = function(req, res){
	var websiteName = req.param('websiteName');

	if (typeof websites[websiteName] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		res.json(websites[websiteName].getInformation());
	}
};

exports.hoursBilled = function (req, res) {
	var websiteName = req.param('websiteName');

	if (typeof websites[websiteName] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		websites[websiteName].triggerHoursBilled();
		res.json({status: 'done'});
	}
};

exports.list = function (req, res) {
	res.render('list', {
		title: 'All websites', 
		websites: websites});
};