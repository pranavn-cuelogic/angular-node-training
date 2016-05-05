(function() {
    'use strict';

    angular
        .module('base')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base', {
                url: '',
                abstract: true,
                views: {
                    '@': {
                        templateUrl: 'app/modules/base/views/base.html',
                        controller: 'baseController'
                    },
                    'header@base': {
                        templateUrl: 'app/modules/base/views/header.html',
                    },
                    'sidebar@base': {
                        templateUrl: 'app/modules/base/views/sidebar.html',
                    },
                    'footer@base': {
                        templateUrl: 'app/modules/base/views/footer.html',
                    }
                }
            });
    }

})();
