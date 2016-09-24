var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mongoose = require('mongoose');

router.get('/search', function(req,res){
	//console.log("You hit that");
	mongoose.connect('mongodb://localhost/serviceProviders');
	var db = mongoose.connection;
	var hbObj = db.firms.find().limit(5);
	console.log(hbObj);
	res.render('search');
});

module.exports = router;