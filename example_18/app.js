var app = angular.module('googleioApp', ['ngRoute', 'ngResource']);

app.
	controller('todoCtrl', 
		['$scope', '$todoResource', 
			function($scope, todoResource) {

			}
		]
	).
	factory('todoResource', function($resource) {
		return $resource('http://localhost:3000/api/todos')
	});
