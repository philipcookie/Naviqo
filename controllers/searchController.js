var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Serviceproviders = require('../models/Serviceproviders.js');

router.post('/AF', function(req, res){
	
	console.log('You have arrived');
	console.log(req.body);
	
	Serviceproviders.find({}, (err, result) => { 
		
		//console.log(result);

		if (err) {
			throw (err);
		} 
		//console.log(result);
		var hbsObj = {provider : result}
		res.render('search', hbsObj);
	});
});

module.exports = router;