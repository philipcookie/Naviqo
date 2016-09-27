var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserFirmSchema = new Schema({
	firstName :{
		type : String
	},

	lastName : {
		type : String
	}

	businessEmail : {
		type : String
	}

	phone : {
		type: String
	}

	companyName : {
		type : String
	}

});

var UserFirm = mongoose.model('UserFirm', UserFirmSchema);
module.exports = UserFirm;

