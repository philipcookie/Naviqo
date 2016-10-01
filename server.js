//Dependencies 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(express.static(path.normalize(path.join(__dirname, 'public'))));
var PORT = process.env.PORT || 8080;//must use this for heroku deployment

//SETTING UP HANDLEBARS
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//SET UP BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//MAKE STATIC PUBLIC DIRECTORY
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// SETTING UP DATABASE CONNECTION & Mongoose
mongoose.connect('mongodb://localhost/naviqo');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});


//ROUTES
var Serviceproviders = require('./models/Serviceproviders.js');
// var Requestor = require('./models/ServiceRequestor.js');

var home_Controller = require('./controllers/homeController.js');
var search_Controller = require('./controllers/searchController.js');
var signup_Controller = require('./controllers/signup.js');

app.use('/', home_Controller);
app.use('/api', search_Controller); 
app.use('/', signup_Controller)

app.listen(PORT, function(){
	console.log('Listening on port ' + PORT);
});