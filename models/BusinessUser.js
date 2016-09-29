var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BusinessUserSchema = new Schema({
	firstName :{
		type : String
	},

	lastName : {
		type : String
	},

	businessEmail : {
		type : String
	},

	businessEmail : {
		type : String
	},

	companyName : {
		type : String
	}
});

var BusinessUser = mongoose.model('businessUsers', BusinessUserSchema);
module.exports = BusinessUser;

