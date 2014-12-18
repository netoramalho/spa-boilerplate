'use strict';

/*
	Directive
	navbar 
*/
angular.module('angularStructure').directive('listcardmovie', function () {
	return {
		restrict: 'E',
		templateUrl: 'components/cardmovie/cardmovie.html',
		controller: 'CardmovieCtrl',
		scope: {
			movies: "="
		}
	};
});