angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})

        .when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'	
		})

		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegisterController'	
		})

	$locationProvider.html5Mode(true);

}]);