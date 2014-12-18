'use strict';

/*
	Controller
	NavbarCtrl 
*/
angular.module('angularStructure').controller('NavbarCtrl', ['$scope',
function($scope){
	var activeMobileMenu = false;
	$scope.toogleMobileMenu = function(){
		var nav = document.querySelector('nav');
        (!activeMobileMenu) ? nav.classList.add('nav-mobile-open') : nav.classList.remove('nav-mobile-open');
        activeMobileMenu = !activeMobileMenu;
	}
}]);
