(function() {
    'use strict';

    angular
        .module('app')
        .directive('appListcardmovie', ListCardovie);

    function ListCardovie() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/cardmovie/cardmovie.html',
            controller: 'CardmovieCtrl',
            controllerAs: 'vm',
            scope: {
                movies: "="
            }
        };
        return directive;
    }
})();