'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state', '$location', 'dashboardService', 'localStorageServiceWrapper', loginController]);

    function loginController($scope, $state, $location, dashboardService, localStorageServiceWrapper) {
        console.log("Inside login controller");
        $scope.login = function() {
                var getUsers = dashboardService.getUserList().userDetails;
                if($scope.email && $scope.password) {
                    var email = $scope.email;
                    var pass = $scope.password;
                    var is_exist = false;
                    angular.forEach(getUsers, function(value, key) {
                        if(!is_exist) {
                            if(value.username == email && value.password == pass) {
                                var userInfo = {
                                    'user_email': value.username,
                                    'user_pass': value.password,
                                    'user_id': value.id,
                                    'user_name': value.name
                                };
                                localStorageServiceWrapper.set('ang_userinfo', userInfo);
                                localStorageServiceWrapper.set('authenticated', true);
                                is_exist = true;
                            }
                        }
                    });
                    if(is_exist) {
                        $location.path( "/dashboard" );
                    } else {
                        alert('Username & Password doesn\'t match');
                    }
                } else {
                    alert('Please enter Username & Password');
                }
            }
    }

})();
