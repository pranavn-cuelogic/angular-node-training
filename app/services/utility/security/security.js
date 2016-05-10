(function() {

'use strict';

    angular
        .module('security.service', [])
        .factory('securityService', ['$location', 'localStorageServiceWrapper', securityService]);

    function securityService($location, localStorageServiceWrapper) {
        var setInjector = {

            request: function(config) {

                config.headers = config.headers || {};

                if (localStorageServiceWrapper.get('authenticated')) {
                    config.headers['authorization'] = localStorageServiceWrapper.get('authenticated');
                    $location.path('/dashboard');
                } else {
                    $location.path('/login');
                }
                return config;
            },
            response: function(response, status, config) {

                if (!localStorageServiceWrapper.get("authenticated") || response.status === 401) {
                    $location.path('/login');
                }

                return response;
            }
        };
        return setInjector;
    };
})();