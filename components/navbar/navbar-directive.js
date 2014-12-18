'use strict';

/*
	Directive
	navbar 
*/
angular.module('angularStructure').directive('navbar', function () {
	return {
		restrict: 'E',
		templateUrl: 'components/navbar/navbar.html',
		controller: 'NavbarCtrl',
	};
});