(function() {
    'use strict';

    angular
        .module('dashboard')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.dashboard', {
                url: '/dashboard',
                views: {
                    'content': {
                        templateUrl: 'app/modules/dashboard/views/dashboard.html',
                        controller: 'dashboardController'
                    }
                }
            });
    }

})();
