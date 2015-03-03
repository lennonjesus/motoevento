module.exports = function() {

	var controller = {};

	controller.index = function(req, res) {
		res.render('index', {msg : 'E lá vamos nós!'});
	};

	return controller;

};