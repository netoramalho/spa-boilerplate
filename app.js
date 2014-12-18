'use strict';

angular
	.module('angularStructure', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {

		$locationProvider
			.html5Mode(true)
			.hashPrefix('!');

		$routeProvider
			.when('/', {
				templateUrl: 'sections/home/home.html',
				controller: 'SectionHomeCtrl'
			});
	});