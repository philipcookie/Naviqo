var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BusinessUserSchema = new Schema({
	firstName :{
		type : String
	},

	lastName : {
		type : String
	},

	password : {
		type : String
	},

	businessEmail : {
		type : String
	},

	companyName : {
		type : String
	}
});

var BusinessUser = mongoose.model('BusinessUser', BusinessUserSchema);
module.exports = BusinessUser;

