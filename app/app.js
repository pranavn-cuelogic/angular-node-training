'use strict';

(function() {

    // Declare app level module
    angular
        .module('angularClientApp', [
            'ui.router',
            'ngAnimate',
            'angularLazyImg',
            'ui.bootstrap',
            'localStorage.service',
            'config',
            'auth',
            'base',
            'dashboard',
            'user'
        ])
        .config(['$urlRouterProvider', '$locationProvider', initializeConfigurationPhase])
        .run(['$rootScope', '$state', 'localStorageServiceWrapper', 'dashboardService', handleRoutingValidation]);

    function initializeConfigurationPhase($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/login');
    }

    function handleRoutingValidation($rootScope, $state, localStorageServiceWrapper, dashboardService) {
        $rootScope.$on('$stateChangeStart', 
            function (event, toState, toParams, fromState, fromParams) {
                $rootScope.currentState = $state;
                var userStoredInfo = localStorageServiceWrapper.get('ang_userinfo');
                var email = (userStoredInfo && userStoredInfo.user_email != '') ? userStoredInfo.user_email : null;
                var pass = (userStoredInfo && userStoredInfo.user_pass != '') ? userStoredInfo.user_pass : null;
                is_exist = false,
                toState = (toState.name != '' || typeof toState.name != 'undefined') ? toState.name : null,
                fromState = (fromState.name != '' || typeof fromState.name != 'undefined') ? fromState.name : null;
                angular.forEach(dashboardService.getUserList().userDetails, function(value, key) {
                   if(!is_exist) {
                        if(value.username == email && value.password == pass) {
                            is_exist = true;
                        }
                    }
                });

           
                if(is_exist) {
                    if(toState == 'login' && fromState != null) {
                        $state.transitionTo(fromState);
                    }
                } else if( toState != 'login' && !is_exist) {
                    $state.transitionTo( 'login' );
                    event.preventDefault();
                    console.log('You\'ve been logged out, please log in again!');
                } 
                if(userStoredInfo) {
                    $rootScope.user_name = userStoredInfo.user_name;
                }
            }
        );

    }

})();
