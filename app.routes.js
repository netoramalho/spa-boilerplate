(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider, $locationProvider){
        $locationProvider
            .html5Mode(true)
            .hashPrefix('!');

        $routeProvider
            .when('/', {
                templateUrl: 'sections/home/home.html',
                controller: 'SectionHome',
                controllerAs: 'vm'
            });
    }
})();