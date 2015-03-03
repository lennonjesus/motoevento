module.exports = function(app) {

	var controller = app.controllers.evento;

	app.get('/', controller.index);
};