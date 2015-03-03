angular.module('motoevento', ['ngRoute', 'ngResource'])
	.config(function($routeProvider) {

		$routeProvider.when('/eventos', {
			templateUrl: 'partials/eventos.html',
			controller: 'EventosController'
		});

		$routeProvider.when('/evento', {
			templateUrl: 'partials/evento.html',
			controller: 'EventoController'
		});

		$routeProvider.when('/evento/:eventoId', {
			templateUrl: 'partials/evento.html',
			controller: 'EventoController'
		});


		$routeProvider.otherwise({redirectTo: '/eventos'});

	});