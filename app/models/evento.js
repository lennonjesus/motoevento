var mongoose = require('mongoose');

module.exports = function() {

	var schema = mongoose.Schema({
		nome: {
			type: String,
			required: true,
		},
		tipo: {
			type: String,
			required: true,
		},
		data: {
			type: String,
			required: true,
		}
	});

	return mongoose.model('Evento', schema);

};