module.exports = function(app) {

	var controller = {};

	var Evento = app.models.evento;

	controller.list = function(req, res) {
		Evento.find()
			.exec()
			.then(
				function(eventos) {
					res.json(eventos);
				},
				function(erro) {
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.get = function(req, res) {

		var _id = req.params.id;

		Evento.findById(_id).exec().then(function(evento) {
			if(!evento) throw new Error("Erro ao acessar o evento.");
			res.json(evento);
		},
		function(erro) {
			console.error(erro);
			res.status(404).json(erro);
		});
	};

	controller.save = function(req, res) {
		var _id = req.body._id;

		if(_id) {
			Evento.findByIdAndUpdate(_id, req.body).exec().then(function(evento) {
				res.json(evento);
			},
			function(erro) {
				console.error(erro);
				res.status(500).json(erro);
			});
		} else {
			Evento.create(req.body).then(
				function(evento) {
					res.status(201).json(evento);
				},
				function(erro) {
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}
	};

	return controller;

};