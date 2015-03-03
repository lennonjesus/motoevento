angular.module('motoevento').factory('Evento', function($resource) {
	return $resource('/eventos/:id');
});