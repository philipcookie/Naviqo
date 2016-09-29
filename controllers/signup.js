var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var BusinessUser = require('../models/BusinessUser.js');

router.post('/signup', function(req, res){

	console.log("HELLO");
	console.log(req.body);

	var busUser = new BusinessUser(req.body);

	busUser.save(function(err, doc){
		if(err) {
			res.send(err);
		}
		else{
			res.redirect('/');
		}
	});
});

module.exports = router;