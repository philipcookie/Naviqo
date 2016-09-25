var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Serviceproviders = require('../models/Serviceproviders.js');

mongoose.connect('mongodb://localhost/naviqo'); // WHY DID I HAVE TO BRING THIS HERE TO GET IT TO WORK
var db = mongoose.connection;

router.get('/search', function(req, res){
	db.collection('Serviceproviders').find().toArray((err, result) => {
		
		if (err) {
			throw (err);
		} 
		//console.log(result);
		var hbsObj = {provider : result}
		res.render('search', hbsObj);
	});
});

module.exports = router;