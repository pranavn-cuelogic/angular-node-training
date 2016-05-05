/**
 * Setting up the web service environment upon environment basis
 */
(function() {

    //Environment related configration
    'use strict';

    angular.module('config', [])
        .provider('configProvider', [configProvider]);

    function configProvider() {
        var environment = {
            'privateAppUrl': 'http://web-dev/app/#/',
        };

        this.$get = function() {
            return environment;
        }
    }

})();
