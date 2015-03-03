angular.module('motoevento').controller('EventoController', function($scope, $routeParams, $resource, Evento) {

	if($routeParams.eventoId) {
		Evento.get({id: $routeParams.eventoId}, function(evento) {
			$scope.evento = evento;
		},
		function(erro) {
			console.log(erro);
		});
	} else {
		$scope.evento = new Evento();
	}


	$scope.save = function() {
		$scope.evento.$save()
			.then(function() {
				console.log("evento salvo")
			})
			.catch(function(erro) {
				console.log(erro);
			});
	};

});