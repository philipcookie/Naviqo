var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');

router.post('/login',
	passport.authenticate('local',{
		successRedirect : '/loginSuccess',
		failureRedirect : '/loginFailure'
	})
);

router.get('/loginFailure', function(req, res, next) {
	res.send('Failed to Authenticate');
});

router.get('/loginSuccess', function(req, res,next){
	res.send('Successfully authenticated');
});

module.exports = router;

