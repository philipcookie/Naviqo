//Dependencies 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

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
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
var homeController = require('./controllers/homeController.js');
app.use('/', homeController);



app.listen(PORT, function(){
	console.log('Listening on port ' + PORT);
});