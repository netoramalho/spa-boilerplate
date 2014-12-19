(function() {
    'use strict';

    angular
        .module('app')
        .directive('appNavbar', NavBar);

    function NavBar(){
        var directive = {
            restrict: 'E',
            templateUrl: 'components/navbar/navbar.html',
            controller: 'ComponentNavbar',
            controllerAs: 'vm'
        };
        return directive;
    }
})();