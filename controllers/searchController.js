var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Serviceproviders = require('../models/Serviceproviders.js');

router.post('/AF', function(req, res){
	
	//console.log('You have arrived');
	var path = (req.body.busLine);
	// console.log(path);
	
	Serviceproviders.find({}, (err, result) => { 
		
		if (err) {
			throw (err);
		} 
		
		console.log(result[0].path_AF);		
		var search = [];
		//console.log(searchParam);

		for (var i = 0; i < result.length; i++) {
	 		if(result[i].path_AF == true && result[i].SP_Firm_City == 'Austin') {
	 			search.push(result[i]);
	 		}
	 	};

		var hbsObj = {provider : search}
		res.render('search', hbsObj);
	});
});

router.post('/Legal', function(req, res){
	
	//console.log('You have arrived');
	var path = (req.body.busLine);
	// console.log(path);
	
	Serviceproviders.find({}, (err, result) => { 
		
		if (err) {
			throw (err);
		} 
		
		console.log(result[0].path_Legal);		
		var search = [];
		//console.log(searchParam);

		for (var i = 0; i < result.length; i++) {
	 		if(result[i].path_Legal == true && result[i].SP_Firm_City == 'Austin') {
	 			search.push(result[i]);
	 		}
	 	};

		var hbsObj = {provider : search}
		res.render('search', hbsObj);
	});
});

router.post('/IT', function(req, res){
	
	//console.log('You have arrived');
	var path = (req.body.busLine);
	// console.log(path);
	
	Serviceproviders.find({}, (err, result) => { 
		
		if (err) {
			throw (err);
		} 
		
		console.log(result[0].path_IT);		
		var search = [];
		//console.log(searchParam);

		for (var i = 0; i < result.length; i++) {
	 		if(result[i].path_IT == true && result[i].SP_Firm_City == 'Austin') {
	 			search.push(result[i]);
	 		}
	 	};

		var hbsObj = {provider : search}
		res.render('search', hbsObj);
	});
});

module.exports = router;