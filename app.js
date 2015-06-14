// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


//ROUTES
weatherApp.config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateURL: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/forecast', {
		templateURL: 'pages/forecase.html',
		controller: 'forecastController'
	})

});


//CONTROLLERS
weatherApp.controller('homeController', ['$scope', function ($scopde) {

}]);

weatherApp.controller('forecastController', ['$scope', function ($scopde) {

}]);