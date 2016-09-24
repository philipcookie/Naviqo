var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Serviceproviders = require('../models/Serviceproviders.js');

router.get('/search', function(req, res){
	Serviceproviders.find({}, function(err, doc){
		if (err){
			console.log(err);
		} 
		else {
			res.json(doc);
		}
	});
});

module.exports = router;