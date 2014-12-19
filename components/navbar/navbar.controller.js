(function() {
    'use strict';

    angular
        .module('app')
        .controller('NavbarCtrl', NavbarCtrl);

    function NavbarCtrl(){
        var vm = this;
        vm.toogleMobileMenu = toogleMobileMenu;
        
        var activeMobileMenu = false;
        function toogleMobileMenu(){
            var nav = document.querySelector('nav');
            (!activeMobileMenu) ? nav.classList.add('nav-mobile-open') : nav.classList.remove('nav-mobile-open');
            activeMobileMenu = !activeMobileMenu;
        };
    }
})();
