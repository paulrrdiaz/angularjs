var app = angular.module('googleioApp', ['ngRoute', 'ngResource']);

app.
	config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/users.html',
				controller: 'usersCtrl'
			})
			.when('/user/:id', {
				templateUrl: 'views/user.html',
				controller: 'userCtrl'
			})
			.otherwise({
				redirecTo: '/'
			});
	}).
	controller('usersCtrl', 
		['$scope', 'usersResource', 
		function($scope, usersResource) {
			usersResource.query(function(data) {
				$scope.users = data;
			})
			$scope.removeUser = function(id) {
				usersResource.delete({ id: id });
			}
		}]
	).
	controller('userCtrl', 
		['$scope', 'usersResource', '$routeParams', 
		function($scope, usersResource, $routeParams) {
			usersResource.get({ id: $routeParams.id }, function(data) {
				$scope.user = data;
			});
		}]
	).
	factory('usersResource', function($resource) {
		return $resource('http://jsonplaceholder.typicode.com/users/:id');
	});
