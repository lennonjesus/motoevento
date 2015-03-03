module.exports = function(app) {

	var controller = app.controllers.evento;

	app.route('/eventos')
		.get(controller.list)
		.post(controller.save);

	app.route('/eventos/:id')
		.get(controller.get);
};