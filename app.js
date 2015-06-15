// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


//ROUTES
weatherApp.config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	})

});


//SERVICES

weatherApp.service('cityService', function() {

	this.city = "New York, NY"

});


//CONTROLLERS
weatherApp.controller('homeController', 'cityService', ['$scope', function($scope, cityService) {

	$scope.city = cityService.city;

}]);

weatherApp.controller('forecastController', 'cityService', ['$scope', function($scope, cityService) {

	$scope.city = cityService.city;

}]);