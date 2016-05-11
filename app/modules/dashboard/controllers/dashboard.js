(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$rootScope', '$scope', '$state', '$window', 'dashboardService', 'employeeService', dashboardController]);

    function dashboardController($rootScope, $scope, $state, $window, dashboardService, employeeService) {
        $scope.blackSpinner = 'resource/images/blackSpinner.gif';
        $scope.sortType     = 'name'; // default sort type
        $scope.sortReverse  = false;  // default sort order
        $scope.search   = ''; 
        $scope.userList = function() {
            //calling API and get user list
            $scope.getUsers = dashboardService.getUserList().userDetails;
            $scope.getEmployees = employeeService.getEmployeeList().employeeDetails;
                        
            $scope.subTabMenus = [{
                'tabMenu': 'All',
                'action': 'dashboard'
            }, {
                'tabMenu': 'Proposals',
                'action': 'proposals'
            }]
        };

        $scope.deleteUser = function(user_id) {
            employeeService.deleteEmployee(user_id);
            // using $scope.$apply will tell application that an asynchronous event just occurred.
            $scope.$apply();
        };

        $scope.editUser = function(user_id) {
            if(user_id != null) {
                $state.transitionTo('base.edit', {'user_id': user_id});
            }
        }
    }

})();
