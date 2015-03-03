angular.module('motoevento').controller('EventosController', function($scope, Evento) {

	$scope.eventos = [];

	function list () {
		Evento.query(
			function(eventos) {
				$scope.eventos = eventos;
			}, 
			function(erro) {
				console.log(erro); 
			}
		);
	}

	list();

});