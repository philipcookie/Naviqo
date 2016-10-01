var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceprovidersSchema = new Schema({
	path_AF : {
		type: Boolean
	},

	path_IT : {
		type: Boolean
	},

	path_Legal : {
		type : Boolean
	},

	SP_Firm_Name : {
		type : String
	},

	SP_Firm_Address : {
		type : String
	},

	SP_Firm_Address2 : {
		type : String
	},

	SP_Firm_City : {
		type : String
	},

	SP_Firm_State : {
		type : String
	},

	SP_Firm_Phone : {
		type : String
	},

	SP_Firm_Website : {
		type : String
	},

	SP_Firm_Email : {
		type : String
	},

	SP_Firm_Overview : {
		type : String
	}, 

	SP_Firm_Logo : {
		type : String
	}

});

var Serviceproviders = mongoose.model('Serviceprovider', ServiceprovidersSchema);

module.exports = Serviceproviders;