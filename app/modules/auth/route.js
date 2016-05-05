'use strict';
(function() {

    angular
        .module('auth')
        .config(['$stateProvider', stateProvider]);

    function stateProvider($stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    '@': {
                        templateUrl: 'app/modules/auth/views/login.html',
                        controller: 'loginController'
                    }
                }
            });
    }

})();
